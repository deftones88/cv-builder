import { Input } from "../shadcnui";
import { Label } from "../shadcnui";

type LabelInputProps = {
  title?: string;
};

export const LabelInput = ({ title = "title" }: LabelInputProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="settings-input">{title}</Label>
      <Input id="settings-input" placeholder={`${title} 설정`} />
    </div>
  );
};
