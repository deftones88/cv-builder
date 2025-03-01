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
  const { value: defaultValue, options } = props;
  if (!options?.length) return;
  //  defaultValues.length === options.length
  const initialValues = options.map(
    (_, i) => (defaultValue as boolean[])[i] === true,
  );
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // field.value === Array(options.length)
        const values =
          Array.isArray(field.value) && field.value.length === options?.length
            ? field.value
            : initialValues;
        return (
          <FormItem>
            {options?.map((option, index) => (
              <div key={`${option}.${index}`}>
                <FormItem key={index} className="flex flex-row items-center">
                  <FormControl>
                    <Checkbox
                      checked={values[index] === true}
                      onCheckedChange={(checked) => {
                        const newValue = [...values];
                        newValue[index] = checked === true;
                        field.onChange(newValue);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {option}
                  </FormLabel>
                </FormItem>
              </div>
            ))}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
