import { FIELD_TYPES } from "@shared/constants";
import { Control } from "react-hook-form";
import { ElementInstanceSettings } from "./component-elements";

export type FieldType = (typeof FIELD_TYPES)[keyof typeof FIELD_TYPES];

export type FormField = {
  id: number;
  type: FieldType;
  label: string;
  value?: unknown;
  options?: string[];
  propName: string;
  map?: Record<string, string>;
};

export type FormValues = {
  fields: FormField[];
};

export type FormFieldWithControls = FormField & {
  control: Control<FormValues>;
  name: `fields.${number}.value`;
  settings: ElementInstanceSettings;
};

/* icon array type */
export type IconType =
  | string
  | React.FC<React.SVGProps<SVGSVGElement>>
  | React.ElementType;

/* date range types */
/** 런타임에서 다루는 형태 (선택 중에는 to가 비어 있을 수 있다) */
export type DateRange = {
  from?: Date;
  to?: Date;
};
/** settings에 저장되는 형태 — Date는 JSON 직렬화 후 문자열이 되므로 처음부터 문자열로 보관한다 */
export type StoredDateRange = {
  from?: string;
  to?: string;
};
export type DateSeparator = "." | "/";
