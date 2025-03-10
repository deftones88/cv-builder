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
import { DateRange, FormFieldWithControls } from "@shared/types";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

export const FormDateRange = ({ control, name }: FormFieldWithControls) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {(field.value as DateRange)?.from ? (
                    (field.value as DateRange).to ? (
                      <>
                        {format((field.value as DateRange).from, "PPP", {
                          locale: ko,
                        })}{" "}
                        -{" "}
                        {format((field.value as DateRange).to, "PPP", {
                          locale: ko,
                        })}
                      </>
                    ) : (
                      format((field.value as DateRange).from, "PPP", {
                        locale: ko,
                      })
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
                defaultMonth={(field.value as DateRange)?.from}
                selected={field.value as DateRange}
                onSelect={field.onChange}
                numberOfMonths={2}
                locale={ko}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
