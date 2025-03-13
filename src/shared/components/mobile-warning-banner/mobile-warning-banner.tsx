import { useState, useEffect } from "react";
import { Button } from "@shared/components/shadcnui";

export const MobileWarningBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white text-gray-800 p-4 mx-4 rounded-lg shadow-lg max-w-md">
        <div className="flex flex-col">
          <p className="text-center mb-3">
            이 애플리케이션은 데스크톱 환경에 최적화되어 있습니다. 최상의 경험을
            위해 PC를 이용해 주세요.
          </p>
          <Button
            onClick={() => setDismissed(true)}
            className="self-center px-4 py-2 transition-colors"
            aria-label="Dismiss message"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};
