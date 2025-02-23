import type { Meta, StoryObj } from "@storybook/react";
import { LabelInput } from "./label-input";

const meta: Meta<typeof LabelInput> = {
  title: "Components/LabelInput",
  component: LabelInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LabelInput>;

export const Default: Story = {
  args: {
    title: "default",
  },
};
