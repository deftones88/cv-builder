import { ComponentElementInstance } from "@shared/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { encryptedStorage } from "./encryptedStorage";
import { useComponentsStore } from "./use-components-store";

type ComponentEditStore = {
  component: ComponentElementInstance | null;

  // Actions
  selectComponent: (id: string | null) => void;
  updateComponentSettings: (settings: Partial<Record<string, unknown>>) => void;
};

export const useComponentEditStore = create<ComponentEditStore>()(
  persist(
    (set, get) => ({
      component: null,

      selectComponent: (id) => {
        if (!id) {
          set({ component: null });
          return;
        }

        // components store에서 선택
        const component = useComponentsStore.getState().findComponent(id);
        set({ component: component || null });
      },

      updateComponentSettings: (settings) => {
        const { component } = get();
        if (!component) return;

        // components store 업데이트
        useComponentsStore.getState().updateSettings(component.id, settings);
      },
    }),
    {
      name: "cv-builder-component-edit",
      storage: createJSONStorage(() => encryptedStorage),
    },
  ),
);
