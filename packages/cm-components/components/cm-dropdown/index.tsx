import React, { ReactNode } from 'react';

const DropdownContainerWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);
const Head = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);
const ListWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

const SearchWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

const OptionsWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

const SearchInputWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

const options = [
  { key: 1, label: 'hello', value: 'hello' },
  { key: 2, label: 'hello 2', value: 'hello 2' },
  { key: 3, label: 'hello 3', value: 'hello 3' },
  { key: 4, label: 'hello 4', value: 'hello 4' },
];

export const Dropdown = () => {
  return (
    <DropdownContainerWrapper>
      <Head>
        <div className="text-slate-700">Dropdown</div>
      </Head>
      <ListWrapper>
        <SearchWrapper>
          <SearchInputWrapper>
            <input
              name="search"
              className="search"
              placeholder="search"
              value={''}
            />
          </SearchInputWrapper>
        </SearchWrapper>
        <OptionsWrapper>
          {options.map((option) => (
            <>
              <div className="text-center">{option.label}</div>
            </>
          ))}
        </OptionsWrapper>
      </ListWrapper>
    </DropdownContainerWrapper>
  );
};
