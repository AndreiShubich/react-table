import React, { useMemo } from 'react';

interface IObject<T = any> {
  [key: string]: T;
}

type DataPropType = IObject | IObject[];

const getUniqueDataKeys = (data: IObject[]): string[] => {
  const uniqueKeys = data.reduce((acc: string[], item) => {
    const itemKeys = Object.keys(item);
    const newKeys = itemKeys.filter(key => !acc.includes(key));
    
    return [...acc, ...newKeys];
  }, []);

  return uniqueKeys;
}

const formatData = (data: DataPropType) => {
  if (Array.isArray(data)) {
    return data;
  }

  return [data];
}

const ReactTable: React.FC<{
  data: DataPropType;
  showIndex?: boolean;
  indexName?: string;
}> = ({ data, showIndex = true, indexName = '(index)' }) => {
  const dataArr = useMemo(() => formatData(data), [data]);

  const columnNames = useMemo(() => {
    const names = getUniqueDataKeys(dataArr);
    
    if (showIndex) {
      return [indexName, ...names];
    } 

    return names;
  }, [dataArr, indexName, showIndex]);
  
  return <table>
    <thead>
      {
        columnNames.map(cName => <th>{cName}</th>)
      }
    </thead>
    <tbody>
      {
        dataArr.map((item, index) => <tr>
          {
            columnNames.map(cName => {
              if (showIndex && cName === indexName) {
                return <td>{index}</td>;
              } return (
                <td>
                  {item[cName]}
                </td>
              );
            })
          }
        </tr>)
      }
    </tbody>
  </table>
};

export default React.memo(ReactTable);