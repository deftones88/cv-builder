import {
  ImgPlaceholderComponentElement,
  // ListItemComponentElement,
  OrderedListItemComponentElement,
  UnorderedListItemComponentElement,
  TitleInputComponentElement,
} from "@features/cv-components";
import { SelectionElement } from "@shared/types";

export const SelectionElements: SelectionElement = {
  TextInput: TitleInputComponentElement,
  ImgPlaceholder: ImgPlaceholderComponentElement,
  // ListItem: ListItemComponentElement,
  OrderedListItem: OrderedListItemComponentElement,
  UnorderedListItem: UnorderedListItemComponentElement,
};
