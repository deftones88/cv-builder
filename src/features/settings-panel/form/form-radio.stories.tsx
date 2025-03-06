import { Form } from '@shared/components/shadcnui';
import { FIELD_TYPES } from '@shared/constants';
import { FormValues } from '@shared/types';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormRadio } from './form-radio';

const meta: Meta<typeof FormRadio> = {
  title: 'Form Component/FormRadio',
  component: FormRadio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React Hook Form에 연결된 Radio 필드',
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
        defaultValue: { summary: FIELD_TYPES.RADIO },
      },
    },
    value: {
      control: 'text',
      description: '선택된 옵션의 값',
      table: {
        type: { summary: 'text' },
      },
    },
    options: {
      control: { disable: true },
      description: '옵션 목록',
      table: {
        type: { summary: 'string[]' },
      },
    },
    propName: {
      // description: '대상 컴포넌트에 적용할 prop 이름',
      table: { disable: true },
    },
    map: {
      control: { disable: true },
      description: '옵션 목록 값 매핑 정보',
      table: {
        type: { summary: 'string[]' },
      },
    },
  },
  decorators: [
    (Story) => {
      const form = useForm<FormValues>({
        values: {
          fields: [
            {
              id: 1,
              type: FIELD_TYPES.RADIO,
              label: '크기',
              value: 'small',
              options: ['small', 'medium', 'large'],
              propName: 'size',
              map: {
                small: 'sm',
                medium: 'md',
                large: 'lg',
              },
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
                map: fieldData.map,
              }}
            />
          </form>
        </Form>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof FormRadio>;

export const Default: Story = {};
