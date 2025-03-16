import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";
import { memo } from "react";

const FormSwitchBase = ({ control, name, ...props }: FormFieldWithControls) => {
  const { value, options } = props;
  if (!options?.length) return;

  const [option1, option2] = options;
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={value as boolean}
      render={({ field }) => (
        <FormItem>
          <FormItem className="flex flex-row items-center">
            <FormLabel className="text-sm font-normal">{option1}</FormLabel>
            <FormControl>
              <Switch
                checked={field.value as boolean}
                onCheckedChange={field.onChange}
                className="data-[state=unchecked]:bg-zinc-900"
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">{option2}</FormLabel>
          </FormItem>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export const FormSwitch = memo(FormSwitchBase);
