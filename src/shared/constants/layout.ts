import { CSSProperties } from "react";

/**
 * 사이드바 폭을 뷰포트에 따라 늘였다 줄인다.
 *
 * 고정 폭(선택 16rem / 상세 설정 27.5rem)일 때는 창이 좁아져도 사이드바가
 * 그대로라 가운데 종이가 먼저 눌렸다. 1024px에서 종이 자리는 328px밖에
 * 남지 않는다. clamp로 최소 폭은 지키면서 넓은 화면에서만 커지게 한다.
 *
 * clamp(최소, 선호, 최대)
 * - 선택 패널  : 208px ~ 256px (버튼 2열이 유지되는 최소 폭이 13rem)
 * - 상세 설정  : 272px ~ 440px (폼 입력이 읽히는 최소 폭이 17rem)
 */
export const SELECTION_PANEL_WIDTH = "clamp(13rem, 19vw, 16rem)";
export const SETTINGS_PANEL_WIDTH = "clamp(17rem, 26vw, 27.5rem)";

/** SidebarProvider의 `--sidebar-width`를 덮어쓰기 위한 style 객체 */
export const SELECTION_PANEL_STYLE = {
  "--sidebar-width": SELECTION_PANEL_WIDTH,
} as CSSProperties;

export const SETTINGS_PANEL_STYLE = {
  "--sidebar-width": SETTINGS_PANEL_WIDTH,
} as CSSProperties;
