import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormText } from './form-text';

const meta: Meta<typeof FormText> = {
  title: 'SettingsComponent/FormText',
  component: FormText,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const form = useForm<FormValues>({
        values: {
          fields: [
            {
              id: 1,
              type: FIELD_TYPES.TEXT,
              label: '내용',
              value: '내용을 입력하세요',
              propName: 'title',
            },
          ],
        },
      });
      return (
        <Form {...form}>
          <form onBlur={form.handleSubmit((data) => console.log(data))}>
            <Story args={{ control: form.control, name: 'fields.0.value' }} />
          </form>
        </Form>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof FormText>;

export const Default: Story = {};
