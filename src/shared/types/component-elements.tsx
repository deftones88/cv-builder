import { FC } from "react";
import { FormField } from "./form";

export type Position = {
  x: number;
  y: number;
};

export type ElementInstanceSettings = Record<string, unknown>;

export type Elements = "TextInput" | "ImgPlaceholder" | "ListItem";

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
  // position: Position;
};

export type SelectionElement = {
  [key in Elements]: ComponentElement;
};
