import { createJSONStorage, persist } from "zustand/middleware";
import { encryptedStorage } from "./encryptedStorage";
import { ComponentElementInstance, Pages } from "@shared/types";
import { create } from "zustand";
import { useComponentsStore } from "./use-components-store";
import { useComponentEditStore } from "./use-component-edit-store";
import { EmblaCarouselType } from "embla-carousel";

type PagesStore = {
  pages: Pages;
  selectedPageIndex: number;
  pagesCount: number;
  carouselApi: EmblaCarouselType | null;

  // Actions
  setCarouselApi: (api: EmblaCarouselType) => void;
  addPage: (pageIndex: number) => void;
  removePage: (pageIndex: number) => void;
  //   reorderPages: (pageIndex: number, newIndex: number) => void;
  selectPage: (pageIndex: number) => void;
  removeAllPages: () => void;
  getSelectedPageComponents: (pageindex?: number) => ComponentElementInstance[];
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
      carouselApi: null,

      setCarouselApi: (api) => set({ carouselApi: api }),
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
      },

      removePage: (pageIndex) => {
        const newPages = [...get().pages];
        newPages.splice(pageIndex, 1);

        const newIndex =
          get().selectedPageIndex >= newPages.length
            ? Math.max(0, newPages.length - 1)
            : get().selectedPageIndex;

        set({
          pages: newPages,
          selectedPageIndex: newIndex,
          pagesCount: newPages.length,
        });

        // components 리셋해줘야 함
        const newPageComponents = newPages[newIndex]?.components || [];

        useComponentsStore.setState({
          components: newPageComponents,
          componentsCount: newPageComponents.length,
        });
        // settings로 리셋
        if (useComponentEditStore.getState().component) {
          useComponentEditStore.setState({ component: null });
        }
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

      getSelectedPageComponents: (pageIndex) => {
        const { pages, selectedPageIndex } = get();
        const index = pageIndex ?? selectedPageIndex;

        return pages[index]?.components || [];
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
