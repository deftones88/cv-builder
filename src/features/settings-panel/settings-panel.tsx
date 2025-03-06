import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { useComponentsStore } from "@stores";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsPanelHeader } from "./settings-panel-header";
import { SettingsTitleBar } from "./settings-title-bar";

export const SettingsPanel = () => {
  const component = useComponentsStore((state) => state.component);
  if (!component) return null;

  const { id, title } = component;
  return (
    <Sidebar side="right" collapsible="icon" className="w-110">
      <SidebarHeader>
        <SettingsPanelHeader />
      </SidebarHeader>
      <SidebarContent className="mt-4 group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <div className="pl-5 pr-3 flex flex-col gap-2">
          <SettingsTitleBar id={id} title={title} />
          <SettingsPanelForm key={id} />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
