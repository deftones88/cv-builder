import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";

export const FormSelect = ({
  control,
  name,
  ...props
}: FormFieldWithControls) => {
  const { value, options } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={value} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option, index) => (
                <SelectItem value={option} key={index}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
