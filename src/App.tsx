import { HomePage } from "@pages";
import { ErrorBoundary } from "@shared/components";
import { initializeStores } from "@stores";

// 렌더 본문이 아닌 모듈 로드 시점에 1회만 실행한다.
// (StrictMode의 이중 렌더에서 subscribe가 중복 등록되는 것을 막는다)
initializeStores();

function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App;
