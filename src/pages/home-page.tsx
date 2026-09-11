import { Canvas } from "@features/canvas";
import {
  SelectionElementOverlayWrapper,
  SelectionPanel,
} from "@features/selection-panel";
import { SettingsPanel } from "@features/settings-panel";
import {
  CollisionDetection,
  DndContext,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { MainLayout } from "@layouts";

/**
 * 드롭 대상을 커서 위치로 고른다.
 *
 * 기본값인 rectIntersection은 "겹친 넓이"가 가장 큰 곳을 고른다.
 * 캔버스 컴포넌트는 종이 폭을 꽉 채우므로 끌면 여러 삽입 지점과 동시에 겹치고,
 * 커서가 가리키는 곳이 아니라 더 많이 겹친 쪽이 뽑혀 엉뚱한 자리에 놓였다.
 *
 * 포인터가 어떤 영역에도 없을 때만(예: 종이 바깥 회색 영역) 기존 방식으로 되돌린다.
 */
const collisionDetection: CollisionDetection = (args) => {
  const pointerCollisions = pointerWithin(args);
  return pointerCollisions.length > 0
    ? pointerCollisions
    : rectIntersection(args);
};

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
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        /*
         * 드래그를 시작하면 끌고 있는 컴포넌트가 언마운트되어(`isDragging` 시 null)
         * 아래 컴포넌트들이 그 높이만큼 위로 밀린다. 기본 전략(WhileDragging)은
         * 드래그 시작 시점에 한 번만 재므로 이후 rect가 전부 한 칸씩 어긋났다.
         * Always로 두면 레이아웃이 바뀔 때마다 다시 잰다.
         */
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
      >
        <SelectionPanel />
        <Canvas />
        <SettingsPanel />
        <SelectionElementOverlayWrapper />
      </DndContext>
    </MainLayout>
  );
};
