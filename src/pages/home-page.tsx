import { Canvas } from "@features/canvas";
import {
  SelectionElementOverlayWrapper,
  SelectionPanel,
} from "@features/selection-panel";
import { SettingsPanel } from "@features/settings-panel";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { MainLayout } from "@layouts";

export const HomePage = () => {
  /* for clicking - delay drag */
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  /* for mobile */
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);
  return (
    <MainLayout>
      <DndContext sensors={sensors}>
        <SelectionPanel />
        <Canvas />
        <SettingsPanel />
        <SelectionElementOverlayWrapper />
      </DndContext>
    </MainLayout>
  );
};
