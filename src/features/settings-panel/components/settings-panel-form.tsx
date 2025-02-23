import { Form, FormLabel } from "@shared/components/shadcnui";
import { useFieldArray, useForm } from "react-hook-form";
import { FormField as FormFieldType, FormValues } from "@shared/types";
import { FIELD_COMPONENTS } from "./form";
import { useComponentsStore } from "@stores";

type SettingsPanelFormProps = {
  settingsFormField?: FormFieldType[];
};

export const SettingsPanelForm = ({
  settingsFormField,
}: SettingsPanelFormProps) => {
  const form = useForm<FormValues>({
    values: { fields: settingsFormField ?? [] },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });

  const updateSettings = useComponentsStore((state) => state.updateSettings);
  const component = useComponentsStore((state) => state.component);

  if (!component) return null;
  const { id, settings } = component;
  const newSettings = { ...settings };
  const applyChanges = (data: FormValues) => {
    const { fields } = data;
    fields.map((field) => {
      const { value, propName, map } = field;
      newSettings[propName] = map ? map[value as string] : value;
    });

    updateSettings(id, newSettings ?? {});
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
