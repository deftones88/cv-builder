import { Form, FormLabel } from "@shared/components/shadcnui";
import { useFieldArray, useForm } from "react-hook-form";
import { ElementInstanceSettings, FormValues } from "@shared/types";
import { FIELD_COMPONENTS } from "./form";
import { useComponentsStore, useSelectedComponent } from "@stores";
import { SelectionElements } from "@shared/constants";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * 입력 1회마다 스토어를 갱신하면 persist 스토어들이 각각 문서 전체를
 * 다시 직렬화해 쓴다. 타이핑이 끝난 뒤에만 반영한다.
 */
const APPLY_DEBOUNCE_MS = 250;

export const SettingsPanelForm = () => {
  const updateSettings = useComponentsStore((state) => state.updateSettings);
  const component = useSelectedComponent();

  const { id, type, settings } = component!;

  /**
   * 폼의 "구조"는 선택 시점의 settings로 한 번만 만든다.
   *
   * useForm({ values })는 values가 바뀌면 폼을 리셋한다. 라이브 settings로
   * 매번 다시 만들면 타이핑 중 폼이 리셋되고, 값이 비면 조건부 필드
   * (예: Contact의 title/name)가 사라져 되돌릴 수 없게 된다.
   * 부모가 key={id}를 주므로 다른 컴포넌트를 선택하면 새로 계산된다.
   */
  const [initialSettings] = useState<ElementInstanceSettings>(settings ?? {});

  const settingsFormField = useMemo(
    () => SelectionElements[type].getSettingsFormField({ ...initialSettings }),
    [type, initialSettings],
  );

  const form = useForm<FormValues>({
    values: { fields: settingsFormField ?? [] },
  });
  const { fields } = useFieldArray({
    control: form.control,
    name: "fields",
  });

  const applyChanges = useCallback(
    (data: FormValues) => {
      // 병합 기준은 스냅샷이 아니라 "현재" settings여야 한다.
      // 스냅샷에 병합하면 그 사이의 다른 변경이 되돌아간다.
      const current =
        useComponentsStore.getState().findComponent(id)?.settings ?? {};
      const updatedSettings: ElementInstanceSettings = { ...current };

      // mapping value with map values
      data.fields.forEach((field) => {
        const { value, propName, map } = field;
        updatedSettings[propName] = map ? map[value as string] : value;
      });

      updateSettings(id, updatedSettings);
    },
    [updateSettings, id],
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef<FormValues | null>(null);

  useEffect(() => {
    const flush = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      const pending = pendingRef.current;
      pendingRef.current = null;
      if (pending) applyChanges(pending);
    };

    const subscription = form.watch((data) => {
      pendingRef.current = data as FormValues;

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(flush, APPLY_DEBOUNCE_MS);
    });

    return () => {
      subscription.unsubscribe();
      // 컴포넌트를 바꾸는 순간 마지막 입력이 유실되지 않도록 즉시 반영
      flush();
    };
  }, [form, applyChanges]);

  return (
    <div className="px-1 pr-2">
      <Form {...form}>
        {/* handleSubmit(fn)은 핸들러를 반환한다. 호출하지 않으면 아무 일도 하지 않는다 */}
        <form onSubmit={form.handleSubmit(applyChanges)}>
          {fields.map((field, index) => {
            const Component = FIELD_COMPONENTS[field.type];
            return (
              <div key={field.id} className="py-4">
                <div className="flex flex-col gap-2">
                  <FormLabel className="font-bold">{field.label}</FormLabel>
                  <Component
                    control={form.control}
                    name={`fields.${index}.value`}
                    settings={initialSettings}
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
