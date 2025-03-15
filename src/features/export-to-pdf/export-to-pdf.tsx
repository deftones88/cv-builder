import { RefObject, useState } from "react";
import html2pdf from "html2pdf.js";
import { Button } from "@shared/components/shadcnui";
// import { useComponentsStore, usePagesStore } from "@stores";

type ExportToPDFProps = {
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};
export const ExportToPDF = ({ aspectRatioRef }: ExportToPDFProps) => {
  // const componentsCount = useComponentsStore((state) => state.componentsCount);
  // const pagesCount = usePagesStore((state) => state.pagesCount);
  const [isExporting, setIsExporting] = useState(false);

  const generatePDF = async () => {
    if (!aspectRatioRef.current) {
      console.error("aspectRatioRef is null");
      return;
    }
    setIsExporting(true);
    console.log("exporting...");
    try {
      const opt = {
        margin: 0,
        filename: "cv-builder.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: {
          unit: "px",
          format: [
            aspectRatioRef.current.offsetWidth,
            aspectRatioRef.current.offsetHeight,
          ],
        },
      };

      html2pdf().from(aspectRatioRef.current).set(opt).save();
    } catch (error) {
      console.error("Error in PDF generation:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      className="rounded-l-none disabled:bg-gray-300 disabled:text-gray-500"
      onClick={generatePDF}
      // disabled={(pagesCount === 1 && !componentsCount) || isExporting}
      disabled={true}
    >
      {isExporting ? "내보내는 중..." : "PDF로 저장하기 - 수정 중"}
    </Button>
  );
};
