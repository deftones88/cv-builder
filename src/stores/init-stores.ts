import { useComponentEditStore } from "./use-component-edit-store";
import { useComponentsStore } from "./use-components-store";
import { usePagesStore } from "./use-pages-store";

let unsubscribe: (() => void) | null = null;

export const initializeStores = () => {
  // 중복 호출로 구독이 쌓이지 않게 한다
  if (unsubscribe) return unsubscribe;

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
  unsubscribe = usePagesStore.subscribe((state, prevState) => {
    if (state.selectedPageIndex !== prevState.selectedPageIndex) {
      syncPageComponents();
      useComponentEditStore.setState({ selectedId: null });
    }
  });

  // Initial sync
  syncPageComponents();

  return unsubscribe;
};
