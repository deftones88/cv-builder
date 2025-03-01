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
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {isTextArea ? (
              <Textarea
                placeholder={value as string}
                onChange={field.onChange}
                value={field.value as string}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
              />
            ) : (
              <Input
                placeholder={value as string}
                onChange={field.onChange}
                value={field.value as string}
                onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const FormText = memo(FormTextBase);
