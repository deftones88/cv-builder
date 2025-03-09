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

export type IconType =
  | string
  | React.FC<React.SVGProps<SVGSVGElement>>
  | React.ElementType;
