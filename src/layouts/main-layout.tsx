import { MobileWarningBanner } from "@shared/components";
import { SidebarProvider } from "@shared/components/shadcnui";
import { SELECTION_PANEL_STYLE } from "@shared/constants";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-evenly w-full h-screen">
      <MobileWarningBanner />
      {/*
       * 바깥 프로바이더는 왼쪽 선택 패널의 열림 상태만 담당한다.
       * 상세 설정 패널은 자체 프로바이더를 가져 따로 접힌다 (settings-panel.tsx).
       */}
      <SidebarProvider style={SELECTION_PANEL_STYLE}>{children}</SidebarProvider>
      <Toaster position="top-center" expand closeButton richColors />
    </div>
  );
};
