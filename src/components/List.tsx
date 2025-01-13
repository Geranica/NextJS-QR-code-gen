import { ReactNode } from 'react';

interface Item {
  content: ReactNode;
  key: string;
}

interface ListProps {
  items: Item[];
  listClassName?: string;
  listItemClassName?: string;
}

const List = ({ items, listClassName, listItemClassName }: ListProps) => {
  const listContent = items.map((item) => (
    <li
      key={item.key}
      className={listItemClassName}
    >
      {item.content}
    </li>
  ));

  return <ul className={listClassName}>{listContent}</ul>;
};

export default List;
