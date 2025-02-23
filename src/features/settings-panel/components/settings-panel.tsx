import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@shared/components/shadcnui";
import { SelectionElements } from "@shared/constants";
import { useComponentsStore } from "@stores";
import { SettingsPanelForm } from "./settings-panel-form";
import { SettingsTitleBar } from "./settings-title-bar";

export const SettingsPanel = () => {
  let component = useComponentsStore((state) => state.component);
  if (!component)
    //return null;
    component = {
      id: "1",
      type: "TextInput",
      settings: {},
      position: { x: 0, y: 0 },
    };

  const settingsFormField = SelectionElements[component.type].settingsFormField;
  return (
    <Sidebar side="right" collapsible="icon" className="w-110">
      <SidebarHeader>
        <SettingsTitleBar />
      </SidebarHeader>
      <SidebarContent className="group-data-[state=collapsed]:opacity-0 group-data-[state=expanded]:opacity-100">
        <div className="px-6">
          <SettingsPanelForm settingsFormField={settingsFormField} />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
