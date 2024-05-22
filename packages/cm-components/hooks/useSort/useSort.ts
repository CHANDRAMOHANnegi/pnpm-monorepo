import { useEffect, useMemo, useState } from 'react';

type ItemKey<T> = keyof T;
type SortDirection = 'asc' | 'dec';
type SortOptions = { key: string; direction: 'asc' | 'dec' };

export interface SortProps<T> {
  data: T[];
  onSortChange(data: T[]): void;
  sortOptions: SortOptions;
}

export function compareObjectsByKey<T = Record<any, any>>(
  key: keyof T,
  ascending = true,
) {
  return function innerSort(objectA: T, objectB: T) {
    /**
     * lower case
     * string number
     * */
    const sortValue =
      objectA[key] > objectB[key] ? 1 : objectA[key] < objectB[key] ? -1 : 0;
    return ascending ? sortValue : -1 * sortValue;
  };
}

/**
 * Here we are handling the
 * 1. key change
 * 2. direction change
 * **/

export const useSort = <T>({
  data,
  sortOptions = { key: '', direction: 'asc' },
  onSortChange,
}: SortProps<T>) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const initialSortKey = sortOptions?.key as ItemKey<T>;
  const [sortKey, setSortKey] = useState<ItemKey<T>>(initialSortKey);

  const sortedData = useMemo(() => {
    return [...data];
  }, [data]);

  useEffect(() => {
    const sortedData = [...data];
    if (sortedData.length) {
      sortedData.sort(compareObjectsByKey(sortKey, sortDirection === 'asc'));
      /**
       * Bad comparison
       * **/
      const dataFlat = JSON.stringify(data);
      const sortedFlat = JSON.stringify(sortedData);
      if (dataFlat !== sortedFlat && onSortChange) {
        onSortChange(sortedData);
      }
    }
  }, [sortedData, onSortChange, sortDirection, sortKey]);

  const handleDirectionToggle = () => {
    setSortDirection(sortDirection === 'asc' ? 'dec' : 'asc');
  };

  const handleChangeSortKey = (key: keyof T) => {
    if (key && sortKey != key) {
      setSortKey(key);
    }
  };

  return {
    handleChangeSortKey,
    handleDirectionToggle,
    sortKey,
    sortDirection,
  };
};
