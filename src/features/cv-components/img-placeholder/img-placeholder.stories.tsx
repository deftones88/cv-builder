import type { Meta, StoryObj } from '@storybook/react';
import { ImgPlaceholder } from './img-placeholder';

const meta: Meta<typeof ImgPlaceholder> = {
  title: 'CVComponents/ImgPlaceholder',
  component: ImgPlaceholder,
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
type Story = StoryObj<typeof ImgPlaceholder>;

export const Default: Story = {
  args: {
    ratio: '2/3',
    size: 'sm',
    rounded: false,
  },
};

export const OneByOne: Story = {
  args: {
    ratio: '1/1',
    size: 'sm',
    rounded: false,
  },
};

export const ThreeByTwo: Story = {
  args: {
    ratio: '3/2',
    size: 'sm',
    rounded: false,
  },
};

export const ThreeByFour: Story = {
  args: {
    ratio: '3/4',
    size: 'sm',
    rounded: false,
  },
};

export const FourByThree: Story = {
  args: {
    ratio: '4/3',
    size: 'sm',
    rounded: false,
  },
};

export const NineBySixteen: Story = {
  args: {
    ratio: '9/16',
    size: 'sm',
    rounded: false,
  },
};

export const SixteenByNine: Story = {
  args: {
    ratio: '16/9',
    size: 'sm',
    rounded: false,
  },
};
