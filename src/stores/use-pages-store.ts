import { createJSONStorage, persist } from "zustand/middleware";
import { encryptedStorage } from "./encryptedStorage";
import { ComponentElementInstance, Pages } from "@shared/types";
import { create } from "zustand";

type PagesStore = {
  pages: Pages;
  selectedPageIndex: number;
  pagesCount: number;

  // Actions
  addPage: (pageIndex: number) => void;
  removePage: (pageIndex: number) => void;
  //   reorderPages: (pageIndex: number, newIndex: number) => void;
  selectPage: (pageIndex: number) => void;
  removeAllPages: () => void;
  getSelectedPageComponents: () => ComponentElementInstance[];
  updatePageComponents: (
    pageIndex: number,
    components: ComponentElementInstance[],
  ) => void;
};

export const usePagesStore = create<PagesStore>()(
  persist(
    (set, get) => ({
      pages: [{ components: [] }],
      selectedPageIndex: 0,
      pagesCount: 1,

      addPage: (pageIndex) => {
        const newPages = [
          ...get().pages.slice(0, pageIndex),
          { components: [] },
          ...get().pages.slice(pageIndex),
        ];
        set({
          pages: newPages,
          pagesCount: newPages.length,
          selectedPageIndex: pageIndex,
        });
        get().selectPage(pageIndex);
      },

      removePage: (pageIndex) => {
        const newPages = [...get().pages];
        newPages.splice(pageIndex, 1);

        const newIndex =
          get().selectedPageIndex >= newPages.length
            ? Math.max(0, newPages.length - 1)
            : get().selectedPageIndex;
        // console.log("newIndex", newIndex);

        set({
          pages: newPages,
          selectedPageIndex: newIndex,
          pagesCount: newPages.length,
        });
      },

      //   reorderPages: (pageIndex, newIndex) =>
      //     set((state) => {
      //       if (pageIndex === newIndex) return state;

      //       const newPages = [...state.pages];
      //       const [movedPage] = newPages.splice(pageIndex, 1);
      //       newPages.splice(newIndex, 0, movedPage);

      //       return { pages: newPages };
      //     }),

      selectPage: (pageIndex) => set({ selectedPageIndex: pageIndex }),

      removeAllPages: () =>
        set({
          pages: [{ components: [] }],
          selectedPageIndex: 0,
          pagesCount: 1,
        }),

      getSelectedPageComponents: () => {
        const { pages, selectedPageIndex } = get();
        return pages[selectedPageIndex]?.components || [];
      },

      updatePageComponents: (pageIndex, components) => {
        const newPages = [...get().pages];
        if (newPages[pageIndex]) {
          newPages[pageIndex] = { ...newPages[pageIndex], components };
        }
        set({ pages: newPages });
      },
    }),
    {
      name: "cv-builder-pages",
      storage: createJSONStorage(() => encryptedStorage),
    },
  ),
);
