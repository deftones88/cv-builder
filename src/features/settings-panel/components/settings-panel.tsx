import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { useComponentsStore } from "@stores";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsHeaderBar } from "./settings-header-bar";
import { SettingsTitleBar } from "./settings-title-bar";

export const SettingsPanel = () => {
  const component = useComponentsStore((state) => state.component);
  if (!component) return null;

  const { id, title } = component;
  return (
    <Sidebar side="right" collapsible="icon" className="w-110">
      <SidebarHeader>
        <SettingsHeaderBar />
      </SidebarHeader>
      <SidebarContent className="mt-4 group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <div className="pl-5 pr-2 flex flex-col gap-2">
          <SettingsTitleBar id={id} title={title} />
          <SettingsPanelForm key={id} />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
