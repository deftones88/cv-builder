import { Button } from "@shared/components/shadcnui";
import { useComponentsStore } from "@stores";

type SettingsTitleBarProps = {
  id: string;
  title: string[];
};

export const SettingsTitleBar = ({ id, title }: SettingsTitleBarProps) => {
  const removeComponent = useComponentsStore((state) => state.removeComponent);
  const [group, item] = title;
  return (
    <div className="flex justify-between w-full bg-zinc-100 rounded-sm p-1 px-2 pr-2">
      <div className="space-x-2">
        <span className="text-lg font-bold">{item.toUpperCase()}</span>
        <span className="font-gowun-dodum text-sm font-normal">
          [{group.toLowerCase()}]
        </span>
      </div>
      <Button
        variant="outline"
        className="text-xs px-2 h-[25px]"
        onClick={() => removeComponent(id)}
      >
        삭제
      </Button>
    </div>
  );
};
