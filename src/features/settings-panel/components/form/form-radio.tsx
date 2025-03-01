import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";

export const FormRadio = ({
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
        <FormItem className="pt-1">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={value as string}
              className="flex flex-col space-y-1"
            >
              {options?.map((option) => (
                <FormItem className="flex items-center" key={option}>
                  <FormControl>
                    <RadioGroupItem value={option} className="size-3" />
                  </FormControl>
                  <FormLabel className="font-normal">{option}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
