import { useComponentEditStore } from "./use-component-edit-store";
import { useComponentsStore } from "./use-components-store";
import { usePagesStore } from "./use-pages-store";

export const initializeStores = () => {
  // 선택된 page와 components sync
  const syncPageComponents = () => {
    const pagesStore = usePagesStore.getState();
    const components = pagesStore.getSelectedPageComponents();

    useComponentsStore.setState({
      components,
      componentsCount: components.length,
    });
  };

  // page 변환 이벤트 subscribe
  usePagesStore.subscribe((state, prevState) => {
    if (state.selectedPageIndex !== prevState.selectedPageIndex) {
      syncPageComponents();
      useComponentEditStore.setState({ component: null });
    }
  });

  // Initial sync
  syncPageComponents();
};
