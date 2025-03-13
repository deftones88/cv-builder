import {
  ImgPlaceholderComponentElement,
  ListItemComponentElement,
  TitleInputComponentElement,
  ContactComponentElement,
  ExperienceComponentElement,
  ProfileComponentElement,
} from "@features/cv-components";
import { SelectionElement } from "@shared/types";

export const SelectionElements: SelectionElement = {
  TextInput: TitleInputComponentElement,
  ImgPlaceholder: ImgPlaceholderComponentElement,
  ListItem: ListItemComponentElement,
  Profile: ProfileComponentElement,
  Contact: ContactComponentElement,
  Experience: ExperienceComponentElement,
};
