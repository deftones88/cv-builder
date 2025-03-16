import { Paper, PAPER_PRESETS } from "@features/canvas";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";
import { RefObject } from "react";
import { toast } from "sonner";

type PDFExportOptions = {
  paperSize: Paper;
  showLoading?: boolean; // 과정 콘솔 로그 찍기
  filename?: string;
};

export const exportCanvasToPDF = async (
  pageRefs: RefObject<(HTMLDivElement | null)[]>,
  options: PDFExportOptions,
) => {
  const {
    paperSize = "A4",
    showLoading = false,
    filename = "cv-builder.pdf",
  } = options;

  // 나중에 customize 할 때를 대비해 변수 처리
  const scale = 2;
  const quality = 1;

  // page index들 array로
  const pageLength = Object.keys(pageRefs.current).length;

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
    for (let i = 0; i < pageLength; i++) {
      const pageElement = pageRefs.current[i];

      if (!pageElement) continue;

      // 클론 버전 사용
      const clonedPage = pageElement!.cloneNode(true) as HTMLElement;

      // 지울 것들 지움
      const elementsToRemove = clonedPage.querySelectorAll(
        "[data-html2canvas-ignore], [data-pdf-ignore], .drag-handle, .component-toolbar",
      );
      elementsToRemove.forEach((el) => el.remove());

      // document에 임시로 클론 렌더
      clonedPage.style.position = "absolute";
      clonedPage.style.left = "-9999px";
      clonedPage.style.top = "0";
      clonedPage.style.width = pageElement!.offsetWidth + "px";
      clonedPage.style.height = pageElement!.offsetHeight + "px";
      document.body.appendChild(clonedPage);

      // 페이지 렌더
      const canvas = await html2canvas(clonedPage, {
        scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        // oklch() 용 수정 : css 있는 모든 element 찾아서 수정
        onclone: (_, elem) => {
          const allElems = elem.querySelectorAll("*");
          allElems.forEach((el) => {
            const style = window.getComputedStyle(el);
            const color = style.color;
            const backgroundColor = style.backgroundColor;

            if (color.includes("oklch")) {
              (el as HTMLElement).style.color = "#000000";
            }
            if (backgroundColor.includes("oklch")) {
              (el as HTMLElement).style.backgroundColor = "#ffffff";
            }
          });
          return elem;
        },
      });

      // aspect ratio에 맞는 dimension 계산
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // 첫 페이지 아닐 시 있는 거에 추가
      if (i > 0) {
        pdf.addPage();
      }

      // img들 추가
      const imgData = canvas.toDataURL(`image/jpeg`, quality);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

      // 클론 삭제
      document.body.removeChild(clonedPage);
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
