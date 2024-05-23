import React, { ReactNode } from 'react';
import { OptionsProps } from './types';

const ListItemWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

export const ListItem = ({ option }: { option: OptionsProps }) => {
  return (
    <ListItemWrapper>
      <div>{option.label}</div>
    </ListItemWrapper>
  );
};
