import {
  Button,
  Calendar,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shared/components/shadcnui";
import { cn } from "@shared/lib/utils";
import { FormFieldWithControls, StoredDateRange } from "@shared/types";
import { toDate, toStoredDateRange } from "@features/cv-components/date-range";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

const formatLabel = (date: Date) => format(date, "PPP", { locale: ko });

export const FormDateRange = ({ control, name }: FormFieldWithControls) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // 저장된 값은 ISO 문자열이므로 달력에 넘기기 전에 Date로 되살린다
        const stored = (field.value ?? {}) as StoredDateRange;
        const from = toDate(stored.from);
        const to = toDate(stored.to);
        const hasRange = Boolean(from);

        return (
          <FormItem>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    type="button"
                    variant={"outline"}
                    className={cn(
                      "w-[240px] text-left font-normal",
                      !hasRange && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {from ? (
                      to ? (
                        <>
                          {formatLabel(from)} - {formatLabel(to)}
                        </>
                      ) : (
                        formatLabel(from)
                      )
                    ) : (
                      <span>날짜 범위를 선택하세요</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={from}
                  selected={{ from, to }}
                  // Date 객체는 직렬화되지 않으므로 ISO 문자열로 바꿔 저장한다
                  onSelect={(range) => field.onChange(toStoredDateRange(range))}
                  numberOfMonths={2}
                  locale={ko}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
