// import { SidebarTrigger } from "@shared/components/shadcnui";

import { Settings2Icon } from "lucide-react";

export const SettingsHeaderBar = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex aspect-square size-5 m-2 items-center justify-center rounded-lg">
        {/* <SidebarTrigger size="lg" /> */}
        <Settings2Icon />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate text-lg">상세 설정</span>
      </div>
    </div>
  );
};
