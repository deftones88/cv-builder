// export const LIST_STYLE_TYPE = {
//   ol: [
//     'decimal',
//     'decimal-leading-zero',
//     'upper-roman',
//     'lower-roman',
//     'upper-alpha',
//     'lower-alpha',
//   ],
//   ul: ['disc', 'circle', 'square'],
// };

import { LIST_STYLE_TYPE } from './list-item.types';

export const LIST_STYLE_TYPE_MAP: Record<LIST_STYLE_TYPE, 'ol' | 'ul'> = {
  decimal: 'ol',
  'decimal-leading-zero': 'ol',
  'upper-roman': 'ol',
  'lower-roman': 'ol',
  'upper-alpha': 'ol',
  'lower-alpha': 'ol',
  disc: 'ul',
  circle: 'ul',
  square: 'ul',
  none: 'ul',
};
