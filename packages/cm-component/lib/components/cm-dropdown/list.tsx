import { ReactNode } from 'react';
import { OptionsProps } from './types';
import { ListItem } from './list-item';

const ListWrapper = ({ children }: { children: ReactNode }) => (
  <div className="border border-dotted border-2 p-l">{children}</div>
);

export const List = ({ options = [] }: { options: OptionsProps[] }) => {
  return (
    <ListWrapper>
      {options.map((option) => (
        <ListItem key={option.key} option={option} />
      ))}
    </ListWrapper>
  );
};
