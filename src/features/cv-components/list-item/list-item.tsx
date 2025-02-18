import { cn } from '@shared/lib/utils';
import { TitleInput } from '../title-input';
import { InputVariants } from '../title-input/title-input.types';
import { LIST_STYLE_TYPE_MAP } from './list-item.constants';
import { LIST_STYLE_TYPE } from './list-item.types';

type ListItemProps = {
  titleOptions?: { variant: InputVariants; title: string };
  list?: string[];
  listStyle?: LIST_STYLE_TYPE;
};

export const ListItem = ({
  titleOptions = undefined,
  list = ['test list'],
  listStyle = 'disc',
}: ListItemProps) => {
  const ListTag = LIST_STYLE_TYPE_MAP[listStyle];

  return (
    <>
      {titleOptions && (
        <TitleInput variant={titleOptions.variant} title={titleOptions.title} />
      )}
      {
        <ListTag className={cn('pl-2 list-inside', `list-${listStyle}`)}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ListTag>
      }
    </>
  );
};
