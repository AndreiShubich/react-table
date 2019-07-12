import React, { useMemo, HTMLAttributes } from 'react';
import getUniqueListKeys from './getUniqueListKeys';
import getItemValue from './getItemValue';
import { IObject } from './types';


const ReactTable: React.FC<{
  data: IObject | IObject[];
  showIndex?: boolean;
  indexName?: string;
} & HTMLAttributes<HTMLTableElement>> = ({
  data, showIndex = true, indexName = '(index)', ...tableProps
}) => {
  const list = useMemo(() => (Array.isArray(data) ? data : [data]), [data]);

  const columnNames = useMemo(() => getUniqueListKeys(list), [list]);

  return (
    <table {...tableProps}>
      <thead>
        {showIndex && <th>{indexName}</th>}
        {columnNames.map(cName => <th key={cName}>{cName}</th>)}
      </thead>
      <tbody>
        {
          list.map((item, index) => (
            <tr>
              {showIndex && <td>{index + 1}</td>}
              {
                columnNames.map(cName => (
                  <td key={cName}>
                    {getItemValue(item[cName])}
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
