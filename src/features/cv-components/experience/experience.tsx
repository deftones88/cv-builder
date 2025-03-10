import { TitleInput } from "@features/cv-components/title-input";
import { DateRange } from "@features/cv-components/date-range";
import { DateRange as DateRangeType } from "@shared/types";

export type ExperienceProps = {
  title?: string;
  description?: string;
  dateRange?: DateRangeType;
};

export const Experience = ({
  title,
  description,
  dateRange,
}: ExperienceProps) => {
  return (
    <section className="flex gap-2">
      <DateRange dateRange={dateRange} />
      <div className="w-full">
        <TitleInput variant={"h4"} title={title} />
        <TitleInput variant={"p"} title={description} />
      </div>
    </section>
  );
};
