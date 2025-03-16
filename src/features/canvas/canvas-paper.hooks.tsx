import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useComponentsStore, usePagesStore } from "@stores";

type UseCanvasPaperProps = {
  pageIndex: number;
};

export const useCanvasPaper = ({ pageIndex }: UseCanvasPaperProps) => {
  const droppable = useDroppable({
    id: `canvas-paper-drop-area-${pageIndex}`,
    data: {
      isPaperDropArea: true,
      pageIndex,
    },
  });
  // 각 페이지마다 맞는 컴포넌트를 뿌려줌
  const components = usePagesStore(
    (state) => state.pages[pageIndex]?.components || [],
  );
  // 현재 페이지
  const selectedPageIndex = usePagesStore((state) => state.selectedPageIndex);

  const addComponent = useComponentsStore((state) => state.addComponent);
  const moveComponent = useComponentsStore((state) => state.moveComponent);

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active?.data?.current || !over?.data?.current) return;
      // 현재 페이지 있는 것만 dnd 및 edit 가능하게
      if (pageIndex !== selectedPageIndex) return;

      const { type, props, settingsTitle } = active.data.current;

      const newElement = {
        type,
        settings: props,
        title: settingsTitle,
      };

      const isComponentBtnElement = active.data.current.isComponentBtnElement;

      // dropping btn over paper area
      const isDroppingOverPaperArea = over.data.current.isPaperDropArea;

      if (isComponentBtnElement && isDroppingOverPaperArea) {
        addComponent(components.length, newElement);
        return;
      }

      // dropping btn over other elements
      const isDroppingOverElementTopHalf = over.data.current.isTopHalfElement;
      const isDroppingOverElementBottomHalf =
        over.data.current.isBottomHalfElement;
      const isDroppingOverElement =
        isDroppingOverElementBottomHalf || isDroppingOverElementTopHalf;

      if (isComponentBtnElement && isDroppingOverElement) {
        const overElementIndex = components.findIndex(
          (el) => el.id === over.data.current?.elementId,
        );
        if (overElementIndex === -1) {
          throw new Error("element not found: " + over.data);
        }

        const indexForNewElement =
          overElementIndex + Number(isDroppingOverElementBottomHalf);
        addComponent(indexForNewElement, newElement);
        return;
      }

      // dragging existing elements over another
      const isDraggingExisting: boolean =
        isDroppingOverElement && !!active.data.current.isComponentElement;
      if (isDraggingExisting) {
        const activeElementId = active.data.current?.elementId;
        const overElementIndex = components.findIndex(
          (el) => el.id === over.data.current?.elementId,
        );
        if (!activeElementId || overElementIndex === -1) {
          throw new Error(
            "element not found\n- active : " +
              active.data +
              "\n- over : " +
              over.data,
          );
        }

        const newIndex = isDroppingOverElementBottomHalf
          ? overElementIndex + 1
          : overElementIndex;
        moveComponent(activeElementId, newIndex);
        return;
      }
    },
  });
  return { droppable, components };
};
