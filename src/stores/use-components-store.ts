import { ComponentElementInstance } from "@shared/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { encryptedStorage } from "./encryptedStorage";
import { usePagesStore } from "./use-pages-store";
import { useComponentEditStore } from "./use-component-edit-store";

type ComponentsStore = {
  components: ComponentElementInstance[];
  componentsCount: number;

  // Actions
  addComponent: (
    componentIndex: number,
    component: Omit<ComponentElementInstance, "id">,
  ) => void;
  removeComponent: (id: string) => void;
  moveComponent: (id: string, newIndex: number) => void;
  removeAllComponents: () => void;
  updateSettings: (
    id: string,
    settings: Partial<Record<string, unknown>>,
  ) => void;
  findComponent: (id: string | null) => ComponentElementInstance | undefined;
};

export const useComponentsStore = create<ComponentsStore>()(
  persist(
    (set, get) => ({
      components: [],
      componentsCount: 0,

      addComponent: (componentIndex, component) => {
        // new Component
        const newId = crypto.randomUUID();
        const newComponent = { ...component, id: newId };

        // new Components
        const newComponents = [
          ...get().components.slice(0, componentIndex),
          newComponent,
          ...get().components.slice(componentIndex),
        ];

        set({
          components: newComponents,
          componentsCount: newComponents.length,
        });

        // page store와 sync
        const pagesStore = usePagesStore.getState();
        pagesStore.updatePageComponents(
          pagesStore.selectedPageIndex,
          newComponents,
        );

        // 추가된 component 선택
        useComponentEditStore.getState().selectComponent(newId);
      },

      removeComponent: (id) => {
        // 필터링으로 리스트에서 삭제
        const newComponents = get().components.filter((c) => c.id !== id);

        set({
          components: newComponents,
          componentsCount: newComponents.length,
        });

        // pages store와 sync
        const pagesStore = usePagesStore.getState();
        pagesStore.updatePageComponents(
          pagesStore.selectedPageIndex,
          newComponents,
        );

        // 선택 초기화
        if (useComponentEditStore.getState().component?.id === id) {
          useComponentEditStore.getState().selectComponent(null);
        }
      },

      moveComponent: (id, newIndex) => {
        // 현재 위치(index) 찾기
        const currentIndex = get().components.findIndex((c) => c.id === id);

        if (currentIndex === -1 || currentIndex === newIndex) {
          return;
        }

        const updatedComponents = [...get().components];
        const [movedComponent] = updatedComponents.splice(currentIndex, 1);
        updatedComponents.splice(newIndex, 0, movedComponent);

        set({ components: updatedComponents });

        // pages store와 sync
        const pagesStore = usePagesStore.getState();
        pagesStore.updatePageComponents(
          pagesStore.selectedPageIndex,
          updatedComponents,
        );
      },

      removeAllComponents: () => {
        set({
          components: [],
          componentsCount: 0,
        });

        // pages store와 sync
        const pagesStore = usePagesStore.getState();
        pagesStore.updatePageComponents(pagesStore.selectedPageIndex, []);

        // 선택 초기화
        useComponentEditStore.getState().selectComponent(null);
      },

      updateSettings: (id, newSettings) => {
        const updatedComponents = get().components.map((c) =>
          c.id === id
            ? { ...c, settings: { ...c.settings, ...newSettings } }
            : c,
        );

        set({ components: updatedComponents });

        // pages store와 sync
        const pagesStore = usePagesStore.getState();
        pagesStore.updatePageComponents(
          pagesStore.selectedPageIndex,
          updatedComponents,
        );
      },

      findComponent: (elementId) => {
        if (!elementId) return undefined;
        return get().components.find((el) => el.id === elementId);
      },
    }),
    {
      name: "cv-builder-components",
      storage: createJSONStorage(() => encryptedStorage),
    },
  ),
);
