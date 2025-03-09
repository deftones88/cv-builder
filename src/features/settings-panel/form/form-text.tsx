import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Textarea,
} from "@shared/components/shadcnui";
import { FormFieldWithControls } from "@shared/types";
import { memo } from "react";

export const FormTextBase = ({
  control,
  name,
  settings,
  ...props
}: FormFieldWithControls) => {
  const { value } = props;
  const isTextArea = !(settings.variant as string)?.includes("h");
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const handleChange = (value: string) => {
          const newValue = value ? value : " ";
          field.onChange(newValue);
        };
        return (
          <FormItem>
            <FormControl>
              {isTextArea ? (
                <Textarea
                  placeholder={value as string}
                  onChange={(e) => handleChange(e.target.value)}
                  value={field.value as string}
                />
              ) : (
                <Input
                  placeholder={value as string}
                  onChange={(e) => handleChange(e.target.value)}
                  value={field.value as string}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export const FormText = memo(FormTextBase);
