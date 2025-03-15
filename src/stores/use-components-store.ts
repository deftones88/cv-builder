import { ComponentElementInstance } from "@shared/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { encryptedStorage } from "./encryptedStorage";

type ComponentsStore = {
  components: ComponentElementInstance[];
  component: ComponentElementInstance | null;
  componentsCount: number;
  // Actions
  updateComponentsCount: () => void;
  addComponent: (
    index: number,
    component: Omit<ComponentElementInstance, "id">,
  ) => void;
  removeComponent: (id: string) => void;
  removeAllComponents: () => void;
  moveComponent: (id: string, newIndex: number) => void;
  updateSettings: (
    id: string,
    settings: Partial<Record<string, unknown>>,
  ) => void;
  selectComponent: (id: string | null) => void;
  findComponent: (id: string | null) => ComponentElementInstance | undefined;
};

export const useComponentsStore = create<ComponentsStore>()(
  persist(
    (set, get) => ({
      components: [],
      component: null,
      componentsCount: 0,

      updateComponentsCount: () =>
        set((state) => ({
          componentsCount: state.components.length,
        })),
      addComponent: (index, component) => {
        const newId = crypto.randomUUID();
        const newComponent = { ...component, id: newId };
        set((state) => ({
          components: [
            ...state.components.slice(0, index),
            newComponent,
            ...state.components.slice(index),
          ],
          selectedId: newId,
          component: newComponent,
        }));
        get().updateComponentsCount();
      },

      removeComponent: (id) => {
        set((state) => ({
          components: state.components.filter((c) => c.id !== id),
          component: state.component?.id === id ? null : state.component,
        }));
        get().updateComponentsCount();
      },

      removeAllComponents: () =>
        set(() => ({ component: null, components: [], componentsCount: 0 })),

      moveComponent: (id, newIndex) =>
        set((state) => {
          const currentIndex = state.components.findIndex((c) => c.id === id);

          if (currentIndex === -1 || currentIndex === newIndex) {
            return state;
          }

          const updatedComponents = [...state.components];
          const [movedComponent] = updatedComponents.splice(currentIndex, 1);
          updatedComponents.splice(newIndex, 0, movedComponent);

          return {
            components: updatedComponents,
          };
        }),

      updateSettings: (id, newSettings) => {
        set((state) => ({
          components: state.components.map((c) =>
            c.id === id
              ? { ...c, settings: { ...c.settings, ...newSettings } }
              : c,
          ),
        }));
      },

      selectComponent: (id) => {
        if (!id) {
          set({ component: null });
        } else {
          set((state) => ({
            component: state.components.find((el) => el.id === id) ?? null,
          }));
        }
      },

      findComponent: (elementId) => {
        if (!elementId) {
          return;
        } else {
          return get().components.find((el) => el.id === elementId);
        }
      },
    }),
    {
      name: "cv-builder",
      storage: createJSONStorage(() => encryptedStorage),
    },
  ),
);
