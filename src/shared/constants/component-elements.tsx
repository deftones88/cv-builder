import {
  ImgPlaceholderComponentElement,
  // ListItemComponentElement,
  OrderedListItemComponentElement,
  TitleInputComponentElement,
  UnorderedListItemComponentElement,
} from '@features/cv-components';
import { SelectionElement } from '@shared/types';

export const SelectionElements: SelectionElement = {
  TextInput: TitleInputComponentElement,
  ImgPlaceholder: ImgPlaceholderComponentElement,
  // ListItem: ListItemComponentElement,
  OrderedListItem: OrderedListItemComponentElement,
  UnorderedListItem: UnorderedListItemComponentElement,
};
