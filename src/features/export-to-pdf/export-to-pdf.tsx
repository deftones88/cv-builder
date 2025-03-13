import { RefObject } from "react";
import html2pdf from "html2pdf.js";
import { Button } from "@shared/components/shadcnui";

type ExportToPDFProps = {
  aspectRatioRef: RefObject<HTMLDivElement | null>;
};
export const ExportToPDF = ({ aspectRatioRef }: ExportToPDFProps) => {
  const generatePDF = async () => {
    if (!aspectRatioRef.current) return;
    const opt = {
      margin: 0,
      filename: "canvas-export.pdf",
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
  };

  return (
    <Button className="rounded-l-none" onClick={generatePDF}>
      Export to PDF
    </Button>
  );
};
