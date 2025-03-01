import {
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";

export const FormCheckbox = ({
  control,
  name,
  ...props
}: FormFieldWithControls) => {
  const { value, options } = props;
  if (!options?.length) return;
  const [label] = options;
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={value as boolean}
      render={({ field }) => (
        <FormItem>
          <FormItem className="flex flex-row items-center">
            <FormControl>
              <Checkbox
                checked={field.value as boolean}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">{label}</FormLabel>
          </FormItem>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
