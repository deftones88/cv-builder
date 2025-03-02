import { useDraggable, useDroppable } from "@dnd-kit/core";
import { SelectionElements } from "@shared/constants";
import { cn } from "@shared/lib/utils";
import { ComponentElementInstance } from "@shared/types";
import { useComponentsStore } from "@stores";
import { useState } from "react";

type CanvasComponentWrapperProps = {
  component: ComponentElementInstance;
};

export const CanvasComponentWrapper = ({
  component,
}: CanvasComponentWrapperProps) => {
  const selectComponent = useComponentsStore((state) => state.selectComponent);
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const { settings: props, id, type } = component;
  const ComponentElement = SelectionElements[type].component;

  const topHalf = useDroppable({
    id: id + "-top",
    data: {
      type,
      elementId: id,
      isTopHalfElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: id + "-bottom",
    data: {
      type,
      elementId: id,
      isBottomHalfElement: true,
    },
  });

  const draggable = useDraggable({
    id: id + "-drag-handler",
    data: {
      type,
      elementId: id,
      isComponentElement: true,
    },
  });

  if (draggable.isDragging) return null;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className="relative w-full min-h-[10px] hover:cursor-pointer rounded-md border-none hover:border-none"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(event) => {
        event.stopPropagation();
        selectComponent(id);
      }}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full bottom-0 h-1/2 rounded-b-md"
      />
      {mouseIsOver && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-lg font-bold text-black">
              클릭<span className="text-sm!">하거나</span> 드래그
              <span className="text-sm!">하세요</span>
            </div>
          </div>
        </>
      )}
      {topHalf.isOver && (
        <div className="absolute top-0 w-full rounded-t-md h-[7px] bg-zinc-500 z-50" />
      )}
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 w-full rounded-b-md h-[7px] bg-zinc-500 z-50" />
      )}
      <div
        className={cn(
          "w-full pointer-event-none opacity-100 py-1",
          mouseIsOver && "py-4 min-h-[50px] opacity-30 bg-zinc-200 rounded-md",
        )}
      >
        <ComponentElement {...props} />
      </div>
    </div>
  );
};
