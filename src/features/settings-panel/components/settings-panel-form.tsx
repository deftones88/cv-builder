import { Form, FormLabel } from "@shared/components/shadcnui";
import { useFieldArray, useForm } from "react-hook-form";
import { FormField as FormFieldType, FormValues } from "@shared/types";
import { FIELD_COMPONENTS } from "./form";

type SettingsPanelFormProps = {
  settingsFormField?: FormFieldType[];
};

export const SettingsPanelForm = ({
  settingsFormField,
}: SettingsPanelFormProps) => {
  const form = useForm<FormValues>({
    values: {
      fields: settingsFormField ?? [],
    },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });

  const applyChanges = (data: FormValues) => {
    console.log("settins panel Form applydata:", data);
  };

  return (
    <Form {...form}>
      <form onBlur={form.handleSubmit(applyChanges)}>
        {fields.map((field, index) => {
          const Component = FIELD_COMPONENTS[field.type];
          return (
            <div key={field.id} className="py-4">
              <div className="flex flex-col gap-2">
                <FormLabel className="font-bold">{field.label}</FormLabel>
                <Component
                  control={form.control}
                  name={`fields.${index}.value`}
                  {...field}
                />
              </div>
            </div>
          );
        })}
      </form>
    </Form>
  );
};
