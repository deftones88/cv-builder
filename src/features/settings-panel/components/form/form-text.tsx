import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";

export const FormText = ({
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
        <FormItem>
          <FormControl>
            <Input
              placeholder={value as string}
              onChange={field.onChange}
              value={field.value as string}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
