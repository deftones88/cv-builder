import { DateRange as DateRangeType, DateSeparator } from "@shared/types";
import { formatDate } from "./date-range.services";
import { DEFAULT_DATE_RANGE } from "../experience/experience.constants";

export type DateRangeProps = {
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
  const placeholder = "현재";
  return (
    <div className="text-xs pt-1 font-bold font-gowun-dodum flex gap-1">
      <p>{from ? formatDate(from, separator, hasDate) : placeholder}</p>
      <p> - </p>
      <p className="pr-2">
        {to ? formatDate(to, separator, hasDate) : placeholder}
      </p>
    </div>
  );
};
