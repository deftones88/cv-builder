import { create } from 'zustand';
import { Component, Position } from './components-store.types';

// type ComponentType = 'text' | 'list' | 'image';

type ComponentsStore = {
  components: Component[];
  selectedId: string | null;
  // Actions
  addComponent: (component: Omit<Component, 'id'>) => void;
  removeComponent: (id: string) => void;
  moveComponent: (id: string, position: Position) => void;
  updateSettings: (id: string, settings: Partial<Record<string, any>>) => void;
  selectComponent: (id: string | null) => void;
};

export const useComponentsStore = create<ComponentsStore>((set) => ({
  components: [],
  selectedId: null,

  addComponent: (component) => {
    const newId = crypto.randomUUID();
    set((state) => ({
      components: [...state.components, { ...component, id: newId }],
      selectedId: newId,
    }));
  },

  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
      selectedId: state.selectedId === id ? null : state.selectedId,
    })),

  moveComponent: (id, position) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, position } : c
      ),
    })),

  updateSettings: (id, newSettings) =>
    set((state) => ({
      components: state.components.map((c) =>
        c.id === id ? { ...c, settings: { ...c.settings, ...newSettings } } : c
      ),
    })),

  selectComponent: (id) => set({ selectedId: id }),
}));

// import { useDroppable } from '@dnd-kit/core';

// const Canvas = () => {
//   const { setNodeRef } = useDroppable({
//     id: 'canvas',
//   });
//   const components = useEditorStore((state) => state.components);

//   return (
//     <div ref={setNodeRef} className='relative w-full aspect-[1/1.4142]'>
//       {components.map((component) => (
//         <DraggableComponent key={component.id} id={component.id} />
//       ))}
//     </div>
//   );
// };
//
// const DraggableComponent = ({ id }: { id: string }) => {
//   const component = useEditorStore(
//     state => state.components.find(c => c.id === id)
//   );
//   const moveComponent = useEditorStore(state => state.moveComponent);
//   const selectComponent = useEditorStore(state => state.selectComponent);

//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id,
//   });

//   if (!component) return null;

//   return (
//     <div
//       ref={setNodeRef}
//       {...listeners}
//       {...attributes}
//       className="absolute"
//       style={{
//         transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
//         left: component.position.x,
//         top: component.position.y,
//       }}
//       onClick={() => selectComponent(id)}
//     >
//       {/* Your component renderer here */}
//     </div>
//   );
// };
