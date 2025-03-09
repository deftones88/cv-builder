import { ComponentElement, Elements } from "@shared/types";
import { Contact, ContactProps } from "./contact";
import { FC } from "react";
import { getContactFormFieldList } from "./contact.services";

const type: Elements = "Contact";

export const ContactComponentElement: ComponentElement = {
  type,
  component: Contact as FC,
  getSettingsFormField: (props: ContactProps) => getContactFormFieldList(props),
};
