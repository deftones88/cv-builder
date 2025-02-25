import { FIELD_TYPES } from '@shared/constants';
import { ComponentElement } from '@shared/types';
import { FC } from 'react';
import { ListItem } from './list-item';

// const type: Elements = "ListItem";

export const OrderedListItemComponentElement: ComponentElement = {
  type: 'OrderedListItem',
  component: ListItem as FC,
  settingsFormField: [
    {
      id: 1,
      type: FIELD_TYPES.ARRAY,
      label: '목록 내용',
      value: ['내용을 입력하세요1', '내용을 입력하세요2'],
      propName: 'list',
    },
    {
      id: 2,
      type: FIELD_TYPES.SELECT,
      label: '불렛 종류',
      value: '불렛 종류룰 고르세요',
      options: [
        'decimal',
        'decimal-leading-zero',
        'upper-roman',
        'lower-roman',
        'upper-alpha',
        'lower-alpha',
      ],
      propName: 'listStyle',
    },
  ],
};

export const UnorderedListItemComponentElement: ComponentElement = {
  type: 'OrderedListItem',
  component: ListItem as FC,
  settingsFormField: [
    {
      id: 1,
      type: FIELD_TYPES.ARRAY,
      label: '목록 내용',
      value: ['내용을 입력하세요1', '내용을 입력하세요2'],
      propName: 'list',
    },
    {
      id: 2,
      type: FIELD_TYPES.SELECT,
      label: '불렛 종류',
      value: '불렛 종류룰 고르세요',
      options: ['disc', 'circle', 'square', '없음'],
      propName: 'listStyle',
    },
  ],
};

// export const ListItemComponentElement: ComponentElement = {
//   type: 'ListItem',
//   component: ListItem as FC,
//   settingsFormField: [
//     {
//       id: 1,
//       type: FIELD_TYPES.ARRAY,
//       label: '목록 내용',
//       value: ['내용을 입력하세요1', '내용을 입력하세요2'],
//       propName: 'list',
//     },
//     {
//       id: 2,
//       type: FIELD_TYPES.SELECT,
//       label: '불렛 종류',
//       value: '불렛 종류룰 고르세요',
//       options: ['disc', 'circle', 'square', '없음'],
//       propName: 'listStyle',
//     },
//   ],
// };
