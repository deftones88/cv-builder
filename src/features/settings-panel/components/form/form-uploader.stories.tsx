import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormUploader } from './form-uploader';

const meta: Meta<typeof FormUploader> = {
  title: 'SettingsComponent/FormUploader',
  component: FormUploader,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const form = useForm<FormValues>({
        values: {
          fields: [
            {
              id: 1,
              type: FIELD_TYPES.UPLOADER,
              label: '파일 업로드',
              value: '업로드할 파일을 선택해주세요',
              propName: 'image',
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
type Story = StoryObj<typeof FormUploader>;

export const Default: Story = {
  args: {
    label: '2/3',
  },
};
