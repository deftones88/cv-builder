import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormUploader } from './form-uploader';

const meta: Meta<typeof FormUploader> = {
  title: 'Form Component/FormUploader',
  component: FormUploader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React Hook Form에 연결된 파일 업로드 필드',
      },
    },
  },
  argTypes: {
    name: {
      // description: '폼 필드 이름',
      table: { disable: true },
    },
    control: {
      // description: 'React Hook Form의 컨트롤 객체',
      table: { disable: true },
    },
    id: {
      // description: 'id',
      table: { disable: true },
    },
    label: {
      // description: 'Parent 용 - 사용 안 함',
      table: { disable: true },
    },
    type: {
      control: { disabled: true },
      description: '폼 컴포넌트 타입',
      table: {
        type: { summary: Object.values(FIELD_TYPES).join(' | ') },
        defaultValue: { summary: FIELD_TYPES.UPLOADER },
      },
    },
    value: {
      // description: '이미지 파일',
      table: { disable: true },
    },
    options: {
      control: { disable: true },
      description: 'placeholder 값과 input type file의 accept 속성',
      table: {
        type: { summary: 'string[0] : placeholder, string[1] : accept' },
        defaultValue: { summary: "['이미지 파일을 선택하세요.','image/*']" },
      },
    },
    propName: {
      // description: '대상 컴포넌트에 적용할 prop 이름',
      table: { disable: true },
    },
    map: {
      table: { disable: true },
    },
  },
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
              options: ['이미지 파일을 선택하세요.', 'image/*'],
              propName: 'image',
            },
          ],
        },
      });
      const fieldData = form.getValues().fields[0];
      return (
        <Form {...form}>
          <form onBlur={form.handleSubmit((data) => console.log(data))}>
            <Story
              args={{
                control: form.control,
                name: 'fields.0.value',
                value: fieldData.value,
                options: fieldData.options,
              }}
            />
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
