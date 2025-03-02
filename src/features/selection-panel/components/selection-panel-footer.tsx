import Images from "@shared/assets/images";
import { Button } from "@shared/components/shadcnui";

export const SelectionPanelFooter = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/deftones88?tab=repositories",
      "_blank",
      "noopener,noreferrer",
    );
  };
  return (
    <div className="w-full pb-2">
      <div className="px-2 py-1 flex justify-between items-center gap-2 bg-zinc-200 rounded-sm">
        <Button
          variant={"link"}
          className="p-0 cursor-pointer h-full"
          onClick={handleClick}
        >
          <img src={Images.githubLogo} alt="github" width={20} />
        </Button>
        <span className="text-sm font-pretendard">@deftones88</span>
      </div>
    </div>
  );
};
