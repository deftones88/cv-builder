import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@shared/components/shadcnui";
import { Dispatch, SetStateAction } from "react";
import { PAPER_PRESETS } from "./canvas-size-select.constants";
import { Paper } from "../canvas-paper.types";

type CanvasSizeSelectProps = {
  paperSize: string;
  setPaperSize: Dispatch<SetStateAction<Paper>>;
};

export const CanvasSizeSelect = ({
  paperSize,
  setPaperSize,
}: CanvasSizeSelectProps) => {
  const handleValueChange = (value: Paper) => {
    setPaperSize(value);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[100px] font-semibold tracking-tight bg-white ring-0 py-0 rounded-r-none">
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
