/** persist 미들웨어가 사용하는 스토리지 키 (초기화 시에도 참조) */
export const STORAGE_KEYS = [
  "cv-builder-pages",
  "cv-builder-components",
  "cv-builder-component-edit",
] as const;

/**
 * 작업 내용을 브라우저에 보관한다.
 *
 * 이전에는 crypto-js로 AES 암호화를 했지만, 키가 `VITE_` 환경변수라
 * 빌드 결과 JS에 그대로 포함된다. 즉 브라우저에서 누구나 복호화할 수 있어
 * 보호 효과는 없고 입력마다 문서 전체를 암호화하는 비용만 남는다.
 * 데이터는 사용자의 브라우저를 벗어나지 않으며 서버로 전송되지 않는다.
 *
 * sessionStorage는 탭을 닫으면 사라져 "작업 내용 자동 저장"과 맞지 않으므로
 * localStorage를 사용한다.
 */
export const persistStorage = {
  getItem: (name: string) => {
    try {
      return localStorage.getItem(name);
    } catch (error) {
      // 프라이빗 모드 등에서 접근이 막힐 수 있다
      console.error("작업 내용을 불러오지 못했습니다:", error);
      return null;
    }
  },
  setItem: (name: string, value: string) => {
    try {
      localStorage.setItem(name, value);
    } catch (error) {
      // quota 초과 등 — 저장에 실패해도 앱은 계속 동작해야 한다
      console.error("작업 내용 저장 실패:", error);
    }
  },
  removeItem: (name: string) => {
    try {
      localStorage.removeItem(name);
    } catch (error) {
      console.error("작업 내용 삭제 실패:", error);
    }
  },
};

/** 저장된 작업 내용을 모두 비운다 (복구 불가 상태에서의 탈출구) */
export const clearPersistedState = () => {
  STORAGE_KEYS.forEach((key) => persistStorage.removeItem(key));
};
