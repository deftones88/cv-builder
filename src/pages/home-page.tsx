import { Canvas } from "@features/canvas";
import { SelectionPanel } from "@features/selection-panel";
import { MainLayout } from "../layouts";
import { SettingsPanel } from "@features/settings-panel";

export const HomePage = () => {
  return (
    <MainLayout>
      <SelectionPanel />
      <Canvas />
      <SettingsPanel />
    </MainLayout>
  );
};
