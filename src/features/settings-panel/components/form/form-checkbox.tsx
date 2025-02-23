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
  const { value } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex">
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <FormLabel>{value}</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
