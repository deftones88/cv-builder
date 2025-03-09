import {
  ImgPlaceholderComponentElement,
  ListItemComponentElement,
  TitleInputComponentElement,
  ContactComponentElement,
} from "@features/cv-components";
import { SelectionElement } from "@shared/types";

export const SelectionElements: SelectionElement = {
  TextInput: TitleInputComponentElement,
  ImgPlaceholder: ImgPlaceholderComponentElement,
  ListItem: ListItemComponentElement,
  Contact: ContactComponentElement,
};
