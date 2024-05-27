import { ReactNode, useState } from 'react';
import { SearchInput } from './search-input';
import { List } from './list';

const DropdownContainer = ({ children }: { children: ReactNode }) => (
  <div className="border border-dotted border-2 border-amber-800 p-l">
    {children}
  </div>
);

const Head = ({ children }: { children: ReactNode }) => (
  <div className="border border-dotted border-2 border-amber-800 p-l ">
    {children}
  </div>
);

const SearchContainer = ({ children }: { children: ReactNode }) => (
  <div className="border border-dotted border-2 border-amber-800 p-l">
    {children}
  </div>
);

const OptionsContainer = ({ children }: { children: ReactNode }) => (
  <div className="border border-dotted border-2 border-amber-800 p-l">
    {children}
  </div>
);

const options = [
  { key: 1, label: 'hello', value: 'hello' },
  { key: 2, label: 'hello 2', value: 'hello 2' },
  { key: 3, label: 'hello 3', value: 'hello 3' },
  { key: 4, label: 'hello 4', value: 'hello 4' },
];

export const Dropdown = () => {
  const [query, setQuery] = useState('');

  console.log(query);

  return (
    <DropdownContainer>
      <Head>
        <div className="text-slate-700">Dropdown</div>
      </Head>
      <OptionsContainer>
        <SearchContainer>
          <SearchInput query={query} setQuery={setQuery} />
        </SearchContainer>
        <OptionsContainer>
          <List options={options} />
        </OptionsContainer>
      </OptionsContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
