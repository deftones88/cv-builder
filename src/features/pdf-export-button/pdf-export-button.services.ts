import { Paper, PAPER_PRESETS } from "@features/canvas";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import { toast } from "sonner";

type PDFExportOptions = {
  paperSize: Paper;
  showLoading?: boolean; // 과정 콘솔 로그 찍기
  filename?: string;
};

/** 캡처 전에 제거할 UI 요소 */
const IGNORED_SELECTOR =
  "[data-html2canvas-ignore], [data-pdf-ignore], .drag-handle, .component-toolbar";

/**
 * 페이지 DOM을 화면 밖 클론으로 렌더해 canvas로 캡처한다.
 * 클론은 실패 여부와 무관하게 반드시 제거한다.
 */
const capturePage = async (pageElement: HTMLElement, scale: number) => {
  const clonedPage = pageElement.cloneNode(true) as HTMLElement;

  clonedPage.querySelectorAll(IGNORED_SELECTOR).forEach((el) => el.remove());

  /*
   * 화면의 종이는 `transform: scale()`로 축소되어 있다. 그대로 캡처하면
   * 창 폭에 따라 PDF 해상도가 달라지므로, 클론에서는 scale을 풀어
   * 항상 설계 크기(PAPER_DESIGN_WIDTH)로 캡처한다.
   */
  const sheet = clonedPage.querySelector<HTMLElement>("[data-paper-sheet]");
  const viewport = clonedPage.querySelector<HTMLElement>("[data-paper-viewport]");

  if (sheet && viewport) {
    sheet.style.transform = "none";
    viewport.style.width = sheet.style.width;
    viewport.style.height = sheet.style.height;
  }

  clonedPage.style.position = "absolute";
  clonedPage.style.left = "-9999px";
  clonedPage.style.top = "0";
  clonedPage.style.width = sheet?.style.width || pageElement.offsetWidth + "px";
  clonedPage.style.height =
    sheet?.style.height || pageElement.offsetHeight + "px";
  document.body.appendChild(clonedPage);

  try {
    return await html2canvas(clonedPage, {
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      // oklch() 용 수정 : css 있는 모든 element 찾아서 수정
      onclone: (_, elem) => {
        elem.querySelectorAll("*").forEach((el) => {
          const style = window.getComputedStyle(el);

          if (style.color.includes("oklch")) {
            (el as HTMLElement).style.color = "#000000";
          }
          if (style.backgroundColor.includes("oklch")) {
            (el as HTMLElement).style.backgroundColor = "#ffffff";
          }
        });
        return elem;
      },
    });
  } finally {
    // html2canvas가 던져도 클론이 화면 밖에 영구히 남지 않도록 보장한다
    clonedPage.remove();
  }
};

export const exportCanvasToPDF = async (
  pages: HTMLElement[],
  options: PDFExportOptions,
) => {
  const {
    paperSize = "A4",
    showLoading = false,
    filename = "cv-builder.pdf",
  } = options;

  if (!pages.length) {
    toast.error("저장할 페이지가 없습니다.");
    return false;
  }

  // 나중에 customize 할 때를 대비해 변수 처리
  const scale = 2;
  const quality = 1;

  // paper orientation과 size
  const dimension =
    PAPER_PRESETS.find((preset) => preset.label === paperSize)?.dimension ??
    210 / 297;
  const isPortrait = dimension < 1;

  if (showLoading) {
    console.log("export status : start");
  }

  try {
    // PDF orientation과 format init
    const pdf = new jsPDF({
      orientation: isPortrait ? "portrait" : "landscape",
      unit: "mm",
      format: paperSize.toLowerCase(),
    });

    // jsPDF가 사용하는 dimension
    const pdfWidth = pdf.internal.pageSize.getWidth();

    // 여러 장 저장
    for (let i = 0; i < pages.length; i++) {
      const canvas = await capturePage(pages[i], scale);

      // aspect ratio에 맞는 dimension 계산
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // 첫 페이지 아닐 시 있는 거에 추가
      if (i > 0) {
        pdf.addPage();
      }

      // img들 추가
      const imgData = canvas.toDataURL("image/jpeg", quality);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save(filename);

    if (showLoading) {
      console.log("export status : success");
    }
    toast(filename + "을 저장하였습니다.");

    return true;
  } catch (error) {
    toast.error(
      "PDF 생성 중 오류가 발생했습니다. 새로고침 후 다시 시도해주세요.",
    );
    console.error("PDF 생성 중 오류 발생:", error);

    if (showLoading) {
      console.log("export status : error");
    }

    return false;
  }
};
