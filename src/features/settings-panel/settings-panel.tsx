import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { useComponentEditStore, useSelectedComponent } from "@stores";
import { useIsMobile } from "@shared/hooks/use-mobile";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsPanelHeader } from "./settings-panel-header";
import { SettingsTitleBar } from "./settings-title-bar";

export const SettingsPanel = () => {
  const isMobile = useIsMobile();
  const component = useSelectedComponent();
  const selectComponent = useComponentEditStore(
    (state) => state.selectComponent,
  );

  if (!component) return null;

  const { id, title } = component;

  const body = (
    <div className="pl-5 pr-3 flex flex-col gap-2">
      <SettingsTitleBar id={id} title={title} />
      <SettingsPanelForm key={id} />
    </div>
  );

  /**
   * 모바일에서는 Sidebar를 쓰지 않는다.
   *
   * SidebarProvider가 하나뿐이라 openMobile 상태를 선택 패널과 공유하는데,
   * 토글 진입점도 하나뿐이라 어느 쪽을 열지 고를 수단이 없었다.
   * 여기서는 선택 상태(selectedId)로 직접 제어하는 별도 Sheet를 띄운다.
   */
  if (isMobile) {
    return (
      <Sheet
        open
        onOpenChange={(open) => {
          if (!open) selectComponent(null);
        }}
      >
        <SheetContent side="bottom" className="h-[75vh] gap-0 p-0">
          <SheetHeader className="px-4 pt-4 pb-0">
            <SheetTitle className="text-lg">상세 설정</SheetTitle>
            <SheetDescription className="sr-only">
              선택한 컴포넌트의 내용과 스타일을 설정합니다.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto pt-2 pb-8">{body}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sidebar side="right" collapsible="icon" className="w-full md:w-110 z-50">
      <SidebarHeader>
        <SettingsPanelHeader />
      </SidebarHeader>
      <SidebarContent className="mt-4 group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        {body}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
