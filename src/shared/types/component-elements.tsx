import { FC } from "react";
import { FormField } from "./form";

export type ElementInstanceSettings = Record<string, unknown>;

export type Elements =
  | "TextInput"
  | "ImgPlaceholder"
  | "ListItem"
  | "Profile"
  | "Contact"
  | "Experience";

export type ComponentElement = {
  type: Elements;
  component: FC;
  getSettingsFormField: (props: Record<string, unknown>) => FormField[];
};

export type ComponentElementInstance = {
  id: string;
  type: Elements;
  title: string[];
  settings?: ElementInstanceSettings;
};

export type Page = { components: ComponentElementInstance[] };
export type Pages = Page[];

export type SelectionElement = {
  [key in Elements]: ComponentElement;
};
