import { Button } from "@shared/components/shadcnui";
import { clearPersistedState } from "@stores";
import { Component, ErrorInfo, PropsWithChildren } from "react";

type ErrorBoundaryState = { error: Error | null };

/**
 * 최상위 에러 경계.
 *
 * 저장된 데이터가 손상되어 렌더가 실패해도 사용자가 스스로 복구할 수 있도록
 * "저장된 내용 초기화" 경로를 제공한다.
 */
export class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("렌더링 중 오류가 발생했습니다:", error, errorInfo);
  }

  handleReset = () => {
    clearPersistedState();
    window.location.reload();
  };

  handleRetry = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-100 p-4">
        <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg">
          <h1 className="text-lg font-bold">문제가 발생했습니다</h1>
          <p className="text-sm text-zinc-600">
            화면을 그리는 중 오류가 발생했습니다. 다시 시도해도 같은 문제가
            반복되면 저장된 작업 내용을 초기화해주세요.
          </p>
          <pre className="max-h-32 overflow-auto rounded bg-zinc-100 p-2 text-xs text-zinc-700">
            {error.message}
          </pre>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={this.handleRetry}>
              다시 시도
            </Button>
            <Button type="button" onClick={this.handleReset}>
              저장된 내용 초기화
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
