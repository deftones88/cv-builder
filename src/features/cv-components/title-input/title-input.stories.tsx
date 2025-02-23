import type { Meta, StoryObj } from "@storybook/react";
import { TitleInput } from "./title-input";

const meta: Meta<typeof TitleInput> = {
  title: "CVComponents/TitleInput",
  component: TitleInput,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "text input",
    },
    variant: {
      control: "radio",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "blockquote",
        "lead",
        "large",
        "small",
        "muted",
      ],
      description: "text type",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TitleInput>;

export const H1: Story = {
  args: {
    title: "The Joke Tax Chronicles",
    variant: "h1",
  },
};

export const H2: Story = {
  args: {
    title: "The King's Plan",
    variant: "h2",
  },
};

export const H3: Story = {
  args: {
    title: "The Joke Tax",
    variant: "h3",
  },
};

export const H4: Story = {
  args: {
    title: "People stopped telling jokes",
    variant: "h4",
  },
};

export const P: Story = {
  args: {
    title:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    variant: "p",
  },
};

export const BlockQuote: Story = {
  args: {
    title:
      '"After all," he said, "everyone enjoys a good joke, so it\'s only fair that they should pay for the privilege."',
    variant: "blockquote",
  },
};

export const Lead: Story = {
  args: {
    title:
      "A modal dialog that interrupts the user with important content and expects a response.",
    variant: "lead",
  },
};
export const Large: Story = {
  args: {
    title: "Are you absolutely sure?",
    variant: "large",
  },
};
export const Small: Story = {
  args: {
    title: "Email address",
    variant: "small",
  },
};
export const Muted: Story = {
  args: {
    title: "Enter your email address.",
    variant: "muted",
  },
};
