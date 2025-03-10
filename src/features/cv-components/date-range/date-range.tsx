import { DateRange as DateRangeType, DateSeparator } from "@shared/types";
import { formatDate } from "./date-range.services";
import { DEFAULT_DATE_RANGE } from "../experience/experience.constants";

type DateRangeProps = {
  dateRange?: DateRangeType;
  separator?: DateSeparator;
  hasDate?: boolean;
};

export const DateRange = ({
  dateRange = DEFAULT_DATE_RANGE,
  separator = ".",
  hasDate = true,
}: DateRangeProps) => {
  const { from, to } = dateRange;
  const placeholder = "YYYY.MM.DD";
  return (
    <div className="w-52 text-xs pt-1 font-bold font-gowun-dodum flex ">
      <span>{from ? formatDate(from, separator, hasDate) : placeholder}</span>
      <span>-</span>
      <span>{to ? formatDate(to, separator, hasDate) : placeholder}</span>
    </div>
  );
};
