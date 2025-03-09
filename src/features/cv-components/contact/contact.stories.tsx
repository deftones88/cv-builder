import type { Meta, StoryObj } from "@storybook/react";
import { Contact } from "./contact";
import { DEFAULT_INFO_LIST } from "./contact.constants";

const meta: Meta<typeof Contact> = {
  title: "CV Components/Contact",
  component: Contact,
  tags: ["autodocs"],
  argTypes: {
    infoList: {
      control: "object",
      description: "contact info list",
    },
    title: { control: "text", description: "title" },
    hasImage: {
      control: "boolean",
      options: [true, false],
      description: "image toggle option",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {
    infoList: DEFAULT_INFO_LIST,
    hasImage: false,
  },
};

export const WithTitle: Story = {
  args: {
    infoList: DEFAULT_INFO_LIST,
    title: "Contact",
  },
};

export const WithImage: Story = {
  args: {
    infoList: DEFAULT_INFO_LIST,
    hasImage: true,
  },
};
