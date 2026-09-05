import { ComponentElementInstance } from "@shared/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "./persist-storage";
import { useComponentsStore } from "./use-components-store";

type ComponentEditStore = {
  /**
   * 선택된 컴포넌트의 id만 보관한다.
   *
   * 예전에는 컴포넌트 객체를 통째로 복사해 뒀는데, 그 사본은 settings가
   * 갱신돼도 따라가지 않아 항상 stale이었다. 실제 데이터는 useComponentsStore
   * 한 곳에만 두고 여기서는 "무엇이 선택됐는지"만 가리킨다.
   */
  selectedId: string | null;

  // Actions
  selectComponent: (id: string | null) => void;
};

export const useComponentEditStore = create<ComponentEditStore>()(
  persist(
    (set) => ({
      selectedId: null,

      selectComponent: (id) => {
        if (!id) {
          set({ selectedId: null });
          return;
        }

        // 존재하지 않는 id는 선택하지 않는다
        const exists = Boolean(useComponentsStore.getState().findComponent(id));
        set({ selectedId: exists ? id : null });
      },
    }),
    {
      name: "cv-builder-component-edit",
      storage: createJSONStorage(() => persistStorage),
      version: 1,
      // v0은 컴포넌트 객체 사본을 저장했다. 선택 상태는 복원할 가치가 없으므로 버린다.
      migrate: () => ({ selectedId: null }),
    },
  ),
);

/**
 * 현재 선택된 컴포넌트를 "라이브"로 조회한다.
 * useComponentsStore가 단일 소스이므로 settings 갱신이 즉시 반영된다.
 */
export const useSelectedComponent = (): ComponentElementInstance | null => {
  const selectedId = useComponentEditStore((state) => state.selectedId);

  return useComponentsStore((state) =>
    selectedId
      ? (state.components.find((c) => c.id === selectedId) ?? null)
      : null,
  );
};
