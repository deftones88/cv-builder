import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SelectionElementOverlay } from "./selection-element-overlay";
import { Elements } from "@shared/types";
import { useComponentsStore } from "@stores";
import { SelectionElements } from "@shared/constants";
import { CATEGORY_MAP } from "../selection-list";

export const SelectionElementOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  const components = useComponentsStore((state) => state.components);

  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem?.data?.current) return null;

  let node = <div>No drag overlay</div>;

  //#region selection list button element
  const isSelectionListBtnElement =
    draggedItem.data.current.isComponentBtnElement;
  if (isSelectionListBtnElement) {
    const { type, categoryIdx } = draggedItem.data.current;
    node = (
      <SelectionElementOverlay
        element={CATEGORY_MAP[type as Elements][categoryIdx]}
      />
    );
  }
  //#endregion
  //#region component element
  const isComponentElement = draggedItem.data.current.isComponentElement;
  if (isComponentElement) {
    const { elementId } = draggedItem.data.current;
    const component = components.find((el) => el.id === elementId);
    if (!component) {
      node = <div>Element not found!</div>;
    } else {
      const { settings: props, type } = component;
      const ComponentElement = SelectionElements[type].component;
      node = (
        <div className="w-full pointer-event-none py-4 min-h-[50px] opacity-30 bg-zinc-200 rounded-md">
          <ComponentElement {...props} />
        </div>
      );
    }
  }
  //#endregion

  return <DragOverlay>{node}</DragOverlay>;
};
