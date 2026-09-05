import { createJSONStorage, persist } from "zustand/middleware";
import { persistStorage } from "./persist-storage";
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

/** 페이지 구성이 통째로 바뀔 때 파생 스토어들을 함께 되돌린다 */
const syncComponentStores = (components: ComponentElementInstance[]) => {
  useComponentsStore.setState({
    components,
    componentsCount: components.length,
  });
  // 선택 상태도 함께 초기화
  if (useComponentEditStore.getState().selectedId) {
    useComponentEditStore.setState({ selectedId: null });
  }
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
        syncComponentStores(newPages[newIndex]?.components || []);
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

      removeAllPages: () => {
        set({
          pages: [{ components: [] }],
          selectedPageIndex: 0,
          pagesCount: 1,
        });

        // removePage와 동일하게 다른 스토어도 리셋해야 한다.
        // 빠뜨리면 stale한 components를 기반으로 다음 추가가 일어나 삭제분이 되살아난다.
        syncComponentStores([]);
      },

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
      storage: createJSONStorage(() => persistStorage),
      // carouselApi(Embla 인스턴스)는 직렬화되지 않는다.
      // 저장하면 복원 시 `{}`가 되어 scrollTo 등이 터지므로 저장 대상에서 제외한다.
      partialize: (state) => ({
        pages: state.pages,
        selectedPageIndex: state.selectedPageIndex,
        pagesCount: state.pagesCount,
      }),
    },
  ),
);
