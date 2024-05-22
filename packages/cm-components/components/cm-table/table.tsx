import { useState } from 'react';
import { tableDataJson } from './tableData';
import TableBody from './table-body';
import TableHead from './table-head';
import './style.css';
import { useSort } from '@/hooks/useSort/useSort';

type Primitive = Record<string, string | number | null>;

export type TableDataProp = Primitive[];

export type TableColumnProp = {
  label: string;
  accessor: string;
  icon?: string;
  onClick?: (a: string) => void;
}[];

export const Table = () => {
  const [tableData, setTableData] = useState<TableDataProp>(tableDataJson);

  const onSortChange = (sortedData: TableDataProp) => {
    setTableData([...sortedData]);
  };

  const { handleChangeSortKey, handleDirectionToggle } = useSort({
    data: tableData,
    onSortChange,
    sortOptions: { direction: 'asc', key: 'id' },
  });

  const onThClick = (accessor: string) => {
    handleChangeSortKey(accessor);
    handleDirectionToggle();
  };

  console.log(tableData);

  const columns: TableColumnProp = [
    { label: 'Full Name', accessor: 'full_name', onClick: onThClick },
    { label: 'Email', accessor: 'email', icon: '^', onClick: onThClick },
    { label: 'Gender', accessor: 'gender' },
    { label: 'Age', accessor: 'age' },
    { label: 'Start date', accessor: 'start_date' },
  ];

  return (
    <>
      <table className="table w-full border-spacing-0">
        <caption>
          Developers currently enrolled in this course, column headers are
          sortable.
        </caption>
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
