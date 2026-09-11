import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from "@shared/components/shadcnui";
import {
  useComponentEditStore,
  useSelectedComponent,
  useSettingsPanelStore,
} from "@stores";
import { useIsMobile } from "@shared/hooks/use-mobile";
import { SETTINGS_PANEL_STYLE } from "@shared/constants";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsPanelHeader } from "./settings-panel-header";
import { SettingsTitleBar } from "./settings-title-bar";

const SettingsPanelBody = () => {
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
    <Sidebar side="right" collapsible="icon" className="z-50">
      <SidebarHeader>
        <SettingsPanelHeader />
      </SidebarHeader>
      <SidebarContent className="mt-4 overflow-x-hidden group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        {body}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

/**
 * 상세 설정 패널은 자체 SidebarProvider를 갖는다.
 *
 * 프로바이더가 하나뿐이면 open 상태를 선택 패널과 공유해 한쪽을 접을 때
 * 양쪽이 같이 접혔다. 여기서 감싸 두 패널이 독립적으로 접히게 한다.
 * - `contents`: 프로바이더의 래퍼 div를 레이아웃에서 지워 기존 flex 행을 그대로 둔다
 * - `shortcutKey={null}`: Cmd+B가 양쪽을 동시에 토글하지 않도록 끈다
 *
 * 열림 상태는 스토어에서 받는다. 캔버스에서 컴포넌트를 클릭했을 때
 * 접혀 있던 패널을 펼쳐야 하는데, 캔버스는 이 프로바이더 바깥이라
 * 컨텍스트에 닿을 수 없기 때문이다.
 */
export const SettingsPanel = () => {
  const open = useSettingsPanelStore((state) => state.open);
  const setOpen = useSettingsPanelStore((state) => state.setOpen);

  return (
    <SidebarProvider
      className="contents"
      style={SETTINGS_PANEL_STYLE}
      shortcutKey={null}
      open={open}
      onOpenChange={setOpen}
    >
      <SettingsPanelBody />
    </SidebarProvider>
  );
};
