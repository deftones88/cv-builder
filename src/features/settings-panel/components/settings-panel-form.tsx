import { Form, FormLabel } from "@shared/components/shadcnui";
import { useFieldArray, useForm } from "react-hook-form";
import { FormValues } from "@shared/types";
import { FIELD_COMPONENTS } from "./form";
import { useComponentsStore } from "@stores";
import { SelectionElements } from "@shared/constants";

export const SettingsPanelForm = () => {
  const updateSettings = useComponentsStore((state) => state.updateSettings);
  const component = useComponentsStore((state) => state.component);

  const { id, type, settings } = component!;
  const newSettings = { ...settings };

  const settingsFormField =
    SelectionElements[type].getSettingsFormField(newSettings);

  const form = useForm<FormValues>({
    values: { fields: settingsFormField ?? [] },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });

  const applyChanges = (data: FormValues) => {
    const { fields } = data;
    // mapping value with map values
    fields.forEach((field) => {
      const { value, propName, map } = field;
      newSettings[propName] = map ? map[value as string] : value;
    });

    updateSettings(id, newSettings ?? {});
  };

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => e.preventDefault()}
      >
        {fields.map((field, index) => {
          const Component = FIELD_COMPONENTS[field.type];
          return (
            <div key={field.id} className="py-4">
              <div className="flex flex-col gap-2">
                <FormLabel className="font-bold">{field.label}</FormLabel>
                <Component
                  control={form.control}
                  name={`fields.${index}.value`}
                  settings={newSettings}
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
