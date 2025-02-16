import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 h-full">
        <h2 className="text-xl font-bold">Default Container</h2>
        <p className="mt-2">This is the default container configuration.</p>
      </div>
    ),
  },
};
