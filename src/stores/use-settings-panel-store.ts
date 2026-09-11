import { create } from "zustand";

type SettingsPanelStore = {
  /** 상세 설정 패널(오른쪽 사이드바)이 펼쳐져 있는지 */
  open: boolean;
  setOpen: (open: boolean) => void;
  /** 캔버스에서 컴포넌트를 클릭했을 때처럼 "펼쳐 달라"고 요청한다 */
  expand: () => void;
};

/**
 * 상세 설정 패널의 펼침 상태를 스토어로 뺀다.
 *
 * 이 패널은 자체 SidebarProvider를 갖고 있어(두 패널을 따로 접기 위해)
 * 캔버스 쪽에서는 그 컨텍스트에 닿을 수 없다. 캔버스에서 컴포넌트를 클릭하면
 * 접혀 있던 패널을 펼쳐야 하므로 상태를 프로바이더 바깥으로 옮긴다.
 *
 * persist하지 않는다. 새로고침하면 펼친 상태로 시작하던 기존 동작을 유지한다.
 */
export const useSettingsPanelStore = create<SettingsPanelStore>((set) => ({
  open: true,
  setOpen: (open) => set({ open }),
  expand: () => set({ open: true }),
}));
