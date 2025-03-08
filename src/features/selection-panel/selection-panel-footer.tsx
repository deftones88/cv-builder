import Images from "@shared/assets/images";
import { Button } from "@shared/components/shadcnui";
import { SelectionPanelFooterDialog } from "./selection-panel-footer-dialog";
import { getCurrentVersion } from "./selection-panel.services";
import { PROJECT_INFO } from "@shared/constants";

export const SelectionPanelFooter = () => {
  const version = getCurrentVersion();
  const { title, github } = PROJECT_INFO;

  const handleClick = () => {
    window.open(
      "https://github.com/deftones88?tab=repositories",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <div className="w-full pb-2 space-y-1">
      <div className="px-2 py-1 flex justify-between items-center gap-2 bg-zinc-200 rounded-sm font-cookie-run">
        <div className="">{title}</div>
        <div className="text-sm flex items-center gap-1">
          v{version}
          <SelectionPanelFooterDialog />
        </div>
      </div>
      <div className="px-2 py-1 flex justify-between items-center gap-2 bg-zinc-200 rounded-sm">
        <Button
          variant={"link"}
          className="p-0 cursor-pointer h-full"
          onClick={handleClick}
        >
          <img src={Images.githubLogo} alt="github" width={20} />
        </Button>
        <span className="text-sm">{github}</span>
      </div>
    </div>
  );
};
