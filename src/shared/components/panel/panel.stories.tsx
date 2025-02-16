// src/features/panel/Panel.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./panel";

const meta: Meta<typeof Panel> = {
  title: "Components/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "radio",
      options: ["left", "right"],
      description: "panel 위치",
    },
    width: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "panel 넓이",
    },
    collapsible: {
      control: "boolean",
      description: "접기/열기",
    },
    variant: {
      control: "radio",
      options: ["border", "shadow"],
      description: "보더 스타일",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

// Base story with title and content
export const Default: Story = {
  args: {
    width: "md",
    position: "left",
    collapsible: false,
    variant: "border",
    children: (
      <>
        <Panel.Title>Default Panel Title</Panel.Title>
        <Panel.Content>
          <p>This is the left panel content.</p>
          <p>You can put any content here.</p>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <Story />
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
      </div>
    ),
  ],
};

// Right-positioned panel
export const RightPosition: Story = {
  args: {
    ...Default.args,
    position: "right",
    children: (
      <>
        <Panel.Title>Right Panel Title</Panel.Title>
        <Panel.Content>
          <p>This is the right panel content.</p>
          <p>You can put any content here.</p>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Collapsible panel
export const LeftCollapsible: Story = {
  args: {
    ...Default.args,
    position: "left",
    collapsible: true,
    children: (
      <>
        <Panel.Title>Default Panel Title</Panel.Title>
        <Panel.Content>
          <p>This is the left panel content.</p>
          <p>You can put any content here.</p>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <Story />
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
      </div>
    ),
  ],
};

// Collapsible panel
export const RightCollapsible: Story = {
  args: {
    ...Default.args,
    position: "right",
    collapsible: true,
    children: (
      <>
        <Panel.Title>Right Panel Title</Panel.Title>
        <Panel.Content>
          <p>This is the right panel content.</p>
          <p>You can put any content here.</p>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Different widths
export const WidthVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {["sm", "md", "lg", "xl"].map((width) => (
        <div key={width} className="flex h-64 overflow-hidden border-b">
          <Panel position="left" width={width as "sm" | "md" | "lg" | "xl"}>
            <div className="p-4">
              <h2 className="text-lg font-bold">{width.toUpperCase()} Width</h2>
              <p className="mt-2">Panel with {width} width setting</p>
            </div>
          </Panel>
          <div className="flex-1 bg-gray-100 p-4">Main Content</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

// Panel with complex content
export const ComplexContent: Story = {
  args: {
    width: "lg",
    collapsible: true,
    children: (
      <>
        <Panel.Title>Dashboard Overview</Panel.Title>
        <Panel.Content>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium">Statistics</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Total Users</div>
                  <div className="text-lg font-semibold">1,234</div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="text-sm text-gray-500">Active Now</div>
                  <div className="text-lg font-semibold">56</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-md font-medium">Recent Activity</h3>
              <ul className="mt-2 space-y-2">
                <li className="bg-white p-2 rounded">User login - John Doe</li>
                <li className="bg-white p-2 rounded">New post created</li>
                <li className="bg-white p-2 rounded">Settings updated</li>
              </ul>
            </div>
          </div>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <Story />
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
      </div>
    ),
  ],
};

// Panel with error state example
export const WithErrorState: Story = {
  args: {
    width: "md",
    children: (
      <>
        <Panel.Title className="text-red-600">Error State</Panel.Title>
        <Panel.Content>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="text-red-800 font-medium">Error Loading Data</h3>
            <p className="text-red-600 mt-2">
              There was a problem loading your dashboard data. Please try
              refreshing the page.
            </p>
          </div>
        </Panel.Content>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-screen h-screen flex">
        <Story />
        <div className="flex-1 bg-gray-50 p-4">
          <h1 className="text-xl font-bold">Main Content Area</h1>
          <p>This shows how the panel looks in a layout context.</p>
        </div>
      </div>
    ),
  ],
};
