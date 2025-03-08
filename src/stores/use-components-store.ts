import { ComponentElementInstance } from "@shared/types";
import { create } from "zustand";

type ComponentsStore = {
  components: ComponentElementInstance[];
  component: ComponentElementInstance | null;
  // Actions
  addComponent: (
    index: number,
    component: Omit<ComponentElementInstance, "id">,
  ) => void;
  removeComponent: (id: string) => void;
  moveComponent: (id: string, newIndex: number) => void;
  updateSettings: (
    id: string,
    settings: Partial<Record<string, unknown>>,
  ) => void;
  selectComponent: (id: string | null) => void;
};

export const useComponentsStore = create<ComponentsStore>((set) => ({
  components: [],
  component: null,

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
  },

  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
      component: state.component?.id === id ? null : state.component,
    })),

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
        c.id === id ? { ...c, settings: { ...c.settings, ...newSettings } } : c,
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
}));
