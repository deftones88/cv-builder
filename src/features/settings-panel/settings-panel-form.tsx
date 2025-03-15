import { Form, FormLabel } from "@shared/components/shadcnui";
import { useFieldArray, useForm } from "react-hook-form";
import { FormValues } from "@shared/types";
import { FIELD_COMPONENTS } from "./form";
import { useComponentEditStore, useComponentsStore } from "@stores";
import { SelectionElements } from "@shared/constants";
import { useCallback, useEffect } from "react";

export const SettingsPanelForm = () => {
  const updateSettings = useComponentsStore((state) => state.updateSettings);
  const component = useComponentEditStore((state) => state.component);

  const { id, type, settings } = component!;

  const settingsFormField = SelectionElements[type].getSettingsFormField({
    ...settings,
  });

  const form = useForm<FormValues>({
    values: { fields: settingsFormField ?? [] },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });

  const applyChanges = useCallback(
    (data: FormValues) => {
      const { fields } = data;
      const updatedSettings = { ...settings };
      // mapping value with map values
      fields.forEach((field) => {
        const { value, propName, map } = field;
        updatedSettings[propName] = map ? map[value as string] : value;
      });
      updateSettings(id, updatedSettings ?? {});
    },
    [updateSettings, id, settings],
  );

  useEffect(() => {
    const subscription = form.watch((data) => {
      applyChanges(data as FormValues);
    });

    return () => subscription.unsubscribe();
  }, [form, applyChanges]);

  return (
    <div className="px-1 pr-2">
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(applyChanges);
          }}
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
                    settings={{ ...settings }}
                    {...field}
                  />
                </div>
              </div>
            );
          })}
        </form>
      </Form>
    </div>
  );
};
