import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { SelectionElementOverlay } from "./selection-elements-overlay";
import {
  HEADINGS_CATEGORY,
  LIST_CATEGORY,
  MEDIA_CATEGORY,
} from "./selection-list.constants";
import { SelectionBtnElement } from "./selection-list.types";
import { Elements } from "@shared/types";

export const SelectionElementOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event) => {
      console.log(event);
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSelectionListBtnElement =
    draggedItem.data?.current?.isComponentBtnElement;
  const categoryMap: Record<Elements, SelectionBtnElement[]> = {
    TextInput: HEADINGS_CATEGORY,
    ImgPlaceholder: MEDIA_CATEGORY,
    ListItem: LIST_CATEGORY,
  };

  if (isSelectionListBtnElement) {
    const { type, categoryIdx } = draggedItem.data?.current ?? {
      type: "TextInput",
      categoryIdx: 0,
    };
    node = (
      <SelectionElementOverlay
        element={categoryMap[type as Elements][categoryIdx]}
      />
    );
  }
  return <DragOverlay>{node}</DragOverlay>;
};
