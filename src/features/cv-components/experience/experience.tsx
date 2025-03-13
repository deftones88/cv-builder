import { TitleInput } from "@features/cv-components/title-input";
import { DateRange, DateRangeProps } from "@features/cv-components/date-range";

export type ExperienceProps = {
  title?: string;
  description?: string;
} & DateRangeProps;

export const Experience = ({
  title,
  description,
  dateRange,
  separator,
  hasDate,
}: ExperienceProps) => {
  return (
    <section className="flex gap-2">
      <DateRange
        dateRange={dateRange}
        separator={separator}
        hasDate={hasDate}
      />
      <div className="w-full">
        <TitleInput variant={"h4"} title={title} />
        <TitleInput variant={"p"} title={description} />
      </div>
    </section>
  );
};
