import { TableColumnProp, TableDataProp } from './table';

const TableBody = ({
  tableData,
  columns,
}: {
  tableData: TableDataProp;
  columns: TableColumnProp;
}) => {
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : '——';
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
