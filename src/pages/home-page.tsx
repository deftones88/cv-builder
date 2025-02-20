import { Canvas } from "@features/canvas";
import {
  SelectionElementOverlayWrapper,
  SelectionPanel,
} from "@features/selection-panel";
import { SettingsPanel } from "@features/settings-panel";
import { DndContext } from "@dnd-kit/core";
import { MainLayout } from "@layouts";

export const HomePage = () => {
  return (
    <MainLayout>
      <DndContext>
        <SelectionPanel />
        <Canvas />
        <SettingsPanel />
        <SelectionElementOverlayWrapper />
      </DndContext>
    </MainLayout>
  );
};
