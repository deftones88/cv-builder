import type { Meta, StoryObj } from '@storybook/react';
import { ImgUploader } from './img-uploader';

const meta: Meta<typeof ImgUploader> = {
  title: 'CVComponents/ImgUploader',
  component: ImgUploader,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['1/1', '2/3', '3/4', '4/3', '16/9', '9/16'],
      description: 'ratio selection',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImgUploader>;

export const Default: Story = {
  args: {
    ratio: '2/3',
  },
};
