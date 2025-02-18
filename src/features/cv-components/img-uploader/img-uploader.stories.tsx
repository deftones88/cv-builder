import type { Meta, StoryObj } from '@storybook/react';
import { ImgUploader } from './img-uploader';

const meta: Meta<typeof ImgUploader> = {
  title: 'CVComponents/ImgUploader',
  component: ImgUploader,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['1/1', '2/3', '3/2', '3/4', '4/3', '9/16', '16/9'],
      description: 'ratio selection',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'size selection',
    },
    rounded: {
      control: 'boolean',
      options: [true, false],
      description: 'rounded edge selection',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImgUploader>;

export const Default: Story = {
  args: {
    ratio: '2/3',
    size: 'sm',
    rounded: false,
  },
};
