import { useState } from "react";
import { Button } from "@shared/components/shadcnui";
import { useIsMobile } from "@shared/hooks/use-mobile";

const DISMISS_KEY = "cv-builder-mobile-notice-dismissed";

const readDismissed = () => {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    // 프라이빗 모드 등에서 접근이 막힐 수 있다
    return false;
  }
};

export const MobileWarningBanner = () => {
  // 기준을 useIsMobile(768px)로 통일한다.
  // 768~1024 구간은 데스크톱 3-패널이 실제로 동작하므로 막을 이유가 없다.
  const isMobile = useIsMobile();
  const [dismissed, setDismissed] = useState(readDismissed);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // 저장 못 해도 이번 세션에서는 닫힌 상태를 유지한다
    }
  };

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white text-gray-800 p-4 mx-4 rounded-lg shadow-lg max-w-md">
        <div className="flex flex-col">
          <p className="text-center mb-3">
            작은 화면에서는 이력서를 확인하고 PDF로 저장할 수 있습니다.
            <br />
            세밀한 편집은 PC 환경을 권장합니다.
          </p>
          <Button
            type="button"
            onClick={handleDismiss}
            className="self-center px-4 py-2 transition-colors"
            aria-label="안내 닫기"
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};
