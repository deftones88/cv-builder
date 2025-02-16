import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@shared/components/shadcn-ui";
import { Dispatch, SetStateAction } from "react";
import { PAPER_PRESETS } from "../constants/canvas-dropdown";

type CanvasDropdownProps = {
  paperSize: string;
  setPaperSize: Dispatch<SetStateAction<string>>;
};

export const CanvasDropdown = ({
  paperSize,
  setPaperSize,
}: CanvasDropdownProps) => {
  const handleValueChange = (value: string) => {
    setPaperSize(value);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[100px] font-semibold tracking-tight bg-white ring-0 py-0">
        {paperSize}
      </SelectTrigger>
      <SelectContent className="py-0">
        <SelectGroup>
          {PAPER_PRESETS.map((paper) => (
            <SelectItem value={paper.label} key={paper.label}>
              {paper.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
