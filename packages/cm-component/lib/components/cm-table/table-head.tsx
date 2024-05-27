import { TableColumnProp } from './table';

const TableHead = ({
  columns,
}: {
  columns: TableColumnProp;
  onThClick?: () => void;
}) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, onClick }) => {
          return (
            <th
              className="font-bold text-left"
              onClick={() => onClick?.(accessor)}
              key={accessor}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
