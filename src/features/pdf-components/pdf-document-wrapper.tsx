// File: pdf-document-wrapper.tsx
import React, { useEffect, useState } from "react";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import { CvDocument } from "./pdf-components";
import {
  PdfComponentsRenderer,
  preprocessComponentsForPdf,
} from "./pdf-component-renderer";
import { useComponentsStore } from "@stores";
import { Button } from "@shared/components/shadcnui";
import { ComponentElementInstance } from "@shared/types";
// import { ComponentElementInstance } from "@shared/types";

// Props for the PDF Download Button
type PdfDownloadButtonProps = {
  fileName?: string;
  buttonText?: string;
};

// PDF Download Button Component
export const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({
  fileName = "my-cv.pdf",
  buttonText = "PDF 저장",
}) => {
  // Get components from your store

  const storeComponents = useComponentsStore((state) => state.components);
  const [processedComponents, setProcessedComponents] = useState<
    ComponentElementInstance[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processComponents = async () => {
      setIsProcessing(true);
      try {
        const processed = await preprocessComponentsForPdf(storeComponents);
        setProcessedComponents(processed);
      } catch (error) {
        console.error("Error preprocessing components:", error);
        setProcessedComponents(storeComponents); // Fallback to original components
      } finally {
        setIsProcessing(false);
      }
    };

    processComponents();
  }, [storeComponents]);

  if (isProcessing) {
    return (
      <Button className="rounded-l-none" disabled>
        준비 중...
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={
        <CvDocument>
          <PdfComponentsRenderer components={processedComponents} />
        </CvDocument>
      }
      fileName={fileName}
    >
      {({ loading, error }) => {
        if (loading) {
          return (
            <Button className="rounded-l-none" disabled>
              준비 중...
            </Button>
          );
        }
        if (error) {
          console.error("PDF Error:", error);
          return (
            <Button className="rounded-l-none" disabled>
              오류가 발생했습니다
            </Button>
          );
        }
        return <Button className="rounded-l-none">{buttonText}</Button>;
      }}
    </PDFDownloadLink>
  );
};

// Props for the PDF Preview Component
type PdfPreviewProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

// PDF Preview Component
export const PdfPreview: React.FC<PdfPreviewProps> = ({
  width = "100%",
  height = 500,
  className = "",
}) => {
  // Get components from your store
  const storeComponents = useComponentsStore((state) => state.components);
  const [processedComponents, setProcessedComponents] = useState<
    ComponentElementInstance[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processComponents = async () => {
      setIsProcessing(true);
      try {
        const processed = await preprocessComponentsForPdf(storeComponents);
        setProcessedComponents(processed);
      } catch (error) {
        console.error("Error preprocessing components:", error);
        setProcessedComponents(storeComponents); // Fallback to original components
      } finally {
        setIsProcessing(false);
      }
    };

    processComponents();
  }, [storeComponents]);

  if (isProcessing) {
    return <div className={className}>로딩 중...</div>;
  }

  return (
    <div className={className}>
      <BlobProvider
        document={
          <CvDocument>
            <PdfComponentsRenderer components={processedComponents} />
          </CvDocument>
        }
      >
        {({ url, loading, error }) => {
          if (loading) return <p>로딩 중...</p>;
          if (error) return <p>에러: {error.message}</p>;
          if (!url) return <p>미리보기를 생성할 수 없습니다</p>;

          return (
            <iframe
              src={url}
              width={width}
              height={height}
              style={{ border: "none" }}
              title="CV PDF Preview"
            />
          );
        }}
      </BlobProvider>
    </div>
  );
};

// Full PDF Export Panel with both download and preview
export const PdfExportPanel: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <PdfDownloadButton />
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 border-b">
          <h3 className="text-lg font-medium">PDF 미리보기</h3>
        </div>
        <div className="p-4">
          <PdfPreview height={600} />
        </div>
      </div>
    </div>
  );
};

// Simple usage example
export const PdfExportExample: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">이력서 빌더</h1>

      {/* Your CV Builder UI here */}

      <div className="mt-8">
        <PdfExportPanel />
      </div>
    </div>
  );
};
