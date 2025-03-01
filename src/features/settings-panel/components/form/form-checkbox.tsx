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
  const { options } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {options?.map((option, index) => (
            <FormField
              key={index}
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem key={index} className="flex flex-row items-center">
                  <FormControl>
                    <Checkbox
                      checked={
                        Array.isArray(field.value)
                          ? (field.value[index] as boolean)
                          : false
                      }
                      onCheckedChange={(checked) => {
                        const newValue = [...(field.value as boolean[])];
                        newValue[index] = checked as boolean;
                        return field.onChange(newValue);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {option}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
