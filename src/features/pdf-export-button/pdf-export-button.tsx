import { ChangeEvent, KeyboardEvent, RefObject, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "@shared/components/shadcnui";
import { useComponentsStore, usePagesStore } from "@stores";
import { exportCanvasToPDF } from "./pdf-export-button.services";
import { Paper } from "@features/canvas";
import { LoaderCircleIcon } from "lucide-react";

type ExportToPDFProps = {
  pageRefs: RefObject<(HTMLDivElement | null)[]>;
  paperSize: Paper;
};
export const PdfExportButton = ({ pageRefs, paperSize }: ExportToPDFProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [filename, setFilename] = useState("cv-builder");

  /** button disable 용 */
  const componentsCount = useComponentsStore((state) => state.componentsCount);
  const pagesCount = usePagesStore((state) => state.pagesCount);

  /** 키보드 enter로 dialog close 용 */
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const generatePDF = async () => {
    if (isExporting) return;
    if (!pageRefs.current) {
      console.error("pageRefs is null");
      return;
    }
    setIsExporting(true);

    try {
      await exportCanvasToPDF(pageRefs, {
        paperSize,
        showLoading: true,
        filename: `${filename}.pdf`,
      });
    } catch (error) {
      console.error("Error exporting PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  /** input handlers */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      generatePDF();
      closeButtonRef.current?.click();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-l-none disabled:bg-gray-300 disabled:text-gray-500 w-[120px] focus-visible:ring-0 focus-visible:outline-0"
          disabled={pagesCount === 1 && !componentsCount}
        >
          {isExporting ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            "PDF로 저장하기"
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>PDF로 저장하기</DialogTitle>
          <DialogDescription>작업한 내용을 PDF로 저장합니다.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center">
          <Label htmlFor="fileName" className="w-15">
            파일명
          </Label>
          <Input
            id="fileName"
            value={filename}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="focus-visible:outline-0"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" ref={closeButtonRef}>
              취소
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={generatePDF}>
              저장하기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
