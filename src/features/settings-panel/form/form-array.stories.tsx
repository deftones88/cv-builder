import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormArray } from './form-array';

const meta: Meta<typeof FormArray> = {
  title: 'Form Component/FormArray',
  component: FormArray,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React Hook Form에 연결된 Input Array 필드',
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
        defaultValue: { summary: FIELD_TYPES.ARRAY },
      },
    },
    value: {
      control: { disable: true },
      description: 'input 목록 내용',
      table: {
        type: { summary: 'string[]' },
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
              type: FIELD_TYPES.ARRAY,
              label: '목록 내용',
              value: ['내용을 입력하세요1', '내용을 입력하세요2'],
              propName: 'list',
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
                name: `fields.0.value`,
                options: fieldData.options,
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
type Story = StoryObj<typeof FormArray>;

export const Default: Story = {};
