import { DateSeparator, StoredDateRange } from "@shared/types";
import { formatDate } from "./date-range.services";
import { DEFAULT_DATE_RANGE } from "../experience/experience.constants";

export type DateRangeProps = {
  dateRange?: StoredDateRange;
  separator?: DateSeparator;
  hasDate?: boolean;
};

export const DateRange = ({
  dateRange = DEFAULT_DATE_RANGE,
  separator = ".",
  hasDate = true,
}: DateRangeProps) => {
  const { from, to } = dateRange ?? {};
  const placeholder = "현재";

  // formatDate가 문자열/Date/무효값을 모두 흡수하고 실패 시 ""를 돌려준다
  return (
    <div className="text-xs pt-1 font-bold font-gowun-dodum flex gap-1 pr-1">
      <p>{formatDate(from, separator, hasDate) || placeholder}</p>
      <p> - </p>
      <p className="min-w-6">
        {formatDate(to, separator, hasDate) || placeholder}
      </p>
    </div>
  );
};
