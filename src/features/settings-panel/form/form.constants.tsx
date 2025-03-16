import { FieldType, FormFieldWithControls } from "@shared/types";
import { FormSelect } from "./form-select";
import { FormText } from "./form-text";
import { FormRadio } from "./form-radio";
import { ComponentType } from "react";
import { FormUploader } from "./form-uploader";
import { FormCheckbox } from "./form-checkbox";
import { FormArray } from "./form-array";
import { FormIconArray } from "./form-icon-array";
import { FormDateRange } from "./form-date-range";
import { FormSwitch } from "./form-switch";

export const FIELD_COMPONENTS: Record<
  FieldType,
  ComponentType<FormFieldWithControls>
> = {
  "text": FormText,
  "select": FormSelect,
  "radio": FormRadio,
  "uploader": FormUploader,
  "checkbox": FormCheckbox,
  "array": FormArray,
  "icon-array": FormIconArray,
  "date-range": FormDateRange,
  "switch": FormSwitch,
};
