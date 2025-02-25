import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './list-item';

const meta: Meta<typeof ListItem> = {
  title: 'CV Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    titleOptions: {
      control: { type: 'object' },
      description: 'title options',
    },
    // 'titleOptions.variant': {
    //   control: 'select',
    //   description: 'title variant',
    //   options: [
    //     'h1',
    //     'h2',
    //     'h3',
    //     'h4',
    //     'p',
    //     'blockquote',
    //     'Lead',
    //     'Large',
    //     'Small',
    //     'Muted',
    //   ],
    // },
    // 'titleOptions.title': {
    //   control: 'text',
    //   description: 'title text',
    // },
    list: {
      control: { type: 'object' },
      description: 'list items',
    },
    listStyle: {
      control: 'select',
      options: [
        'decimal',
        'decimal-leading-zero',
        'upper-roman',
        'lower-roman',
        'upper-alpha',
        'lower-alpha',
        'disc',
        'circle',
        'square',
        'none',
      ],
      description: 'list style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const UnorderedList: Story = {
  args: {
    titleOptions: {
      variant: 'h3',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    list: [
      'Nulla non felis fermentum, viverra lorem sed, commodo leo.',
      'Proin elementum mauris nec mi ultricies, fermentum consequat quam hendrerit.',
      'Aenean non augue id massa semper tincidunt.',
      'In ut justo aliquet, tempor nunc quis, sagittis nunc.',
      'Phasellus ornare tortor sit amet massa porttitor posuere.',
    ],
    listStyle: 'disc',
  },
};

export const NoTitle: Story = {
  args: {
    ...UnorderedList.args,
    titleOptions: undefined,
    listStyle: 'circle',
  },
};

export const OrderedList: Story = {
  args: {
    ...UnorderedList.args,
    listStyle: 'decimal',
  },
};

export const NoTitleOrderedList: Story = {
  args: {
    ...UnorderedList.args,
    titleOptions: undefined,
    listStyle: 'upper-roman',
  },
};

export const NoBulletList: Story = {
  args: {
    ...UnorderedList.args,
    listStyle: 'none',
  },
};

export const NoTitleNoBulletList: Story = {
  args: {
    ...UnorderedList.args,
    titleOptions: undefined,
    listStyle: 'none',
  },
};
