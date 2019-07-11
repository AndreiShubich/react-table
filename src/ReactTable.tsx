import React, { useMemo, HTMLAttributes } from 'react';

interface IObject<T = any> {
  [key: string]: T;
}

const getUniqueListKeys = (list: IObject[]): string[] => {
  const uniqueKeys = list.reduce((acc: string[], item) => {
    const itemKeys = Object.keys(item);
    const newKeys = itemKeys.filter(key => !acc.includes(key));

    return [...acc, ...newKeys];
  }, []);

  return uniqueKeys;
};

const ReactTable: React.FC<{
  data: IObject | IObject[];
  showIndex?: boolean;
  indexName?: string;
} & HTMLAttributes<HTMLTableElement>> = ({
  data, showIndex = true, indexName = '(index)', ...tableProps
}) => {
  const list = useMemo(() => {
    const arr = Array.isArray(data) ? data : [data];

    if (showIndex) {
      return arr.map((item, index) => ({ ...item, [indexName]: index }));
    }

    return arr;
  }, [data, indexName, showIndex]);

  const columnNames = useMemo(() => getUniqueListKeys(list), [list]);

  return (
    <table {...tableProps}>
      <thead>
        {
          columnNames.map(cName => <th key={cName}>{cName}</th>)
        }
      </thead>
      <tbody>
        {
          list.map(item => (
            <tr>
              {
                columnNames.map(cName => (
                  <td key={cName}>
                    {item[cName]}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default React.memo(ReactTable);
