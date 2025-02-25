import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormText } from './form-text';

const meta: Meta<typeof FormText> = {
  title: 'Form Component/FormText',
  component: FormText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React Hook Form에 연결된 텍스트 입력 필드',
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
      description: '폼 컴포넌트 타입',
      table: {
        type: { summary: Object.values(FIELD_TYPES).join(' | ') },
        defaultValue: { summary: FIELD_TYPES.TEXT },
      },
    },
    value: {
      control: 'text',
      description: '입력 필드의 기본값',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '내용을 입력하세요' },
      },
    },
    options: {
      table: { disable: true },
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
              type: FIELD_TYPES.TEXT,
              label: '내용',
              value: '내용을 입력하세요',
              propName: 'title',
            },
          ],
        },
      });
      const fieldData = form.getValues().fields[0];
      return (
        <Form {...form}>
          <form
            onBlur={form.handleSubmit((data) => console.log(data))}
            style={{ width: '300px' }}
          >
            <Story
              args={{
                control: form.control,
                name: 'fields.0.value',
                value: fieldData.value,
              }}
            />
          </form>
        </Form>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof FormText>;

export const Default: Story = {};
