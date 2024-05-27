import { ReactNode } from 'react';

const SearchInputWrapper = ({ children }: { children: ReactNode }) => (
  <div className="">{children}</div>
);

export const SearchInput = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (a: string) => void;
}) => {
  return (
    <SearchInputWrapper>
      <input
        name="search"
        className="search"
        placeholder="search"
        value={query}
        onChange={({ target: { value } }) => {
          setQuery(value);
        }}
      />
    </SearchInputWrapper>
  );
};
