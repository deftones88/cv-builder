import { FC } from "react";

export type Position = {
  x: number;
  y: number;
};

export type Elements = "TextInput" | "ImgPlaceholder" | "ListItem";

export type ComponentElement = {
  type: Elements;
  component: FC;
  propertiesComponent: FC;
};

export type ComponentElementInstance = {
  id: string;
  type: Elements;
  settings?: Record<string, unknown>;
  position: Position;
};

export type SelectionElement = {
  [key in Elements]: ComponentElement;
};
