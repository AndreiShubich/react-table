import React, { useMemo } from 'react';
var getUniqueDataKeys = function (data) {
    var uniqueKeys = data.reduce(function (acc, item) {
        var itemKeys = Object.keys(item);
        var newKeys = itemKeys.filter(function (key) { return !acc.includes(key); });
        return acc.concat(newKeys);
    }, []);
    return uniqueKeys;
};
var formatData = function (data) {
    if (Array.isArray(data)) {
        return data;
    }
    return [data];
};
var ReactTable = function (_a) {
    var data = _a.data, _b = _a.showIndex, showIndex = _b === void 0 ? true : _b, _c = _a.indexName, indexName = _c === void 0 ? '(index)' : _c;
    var dataArr = useMemo(function () { return formatData(data); }, [data]);
    var columnNames = useMemo(function () {
        var names = getUniqueDataKeys(dataArr);
        if (showIndex) {
            return [indexName].concat(names);
        }
        return names;
    }, [dataArr, indexName, showIndex]);
    return <table>
    <thead>
      {columnNames.map(function (cName) { return <th>{cName}</th>; })}
    </thead>
    <tbody>
      {dataArr.map(function (item, index) { return <tr>
          {columnNames.map(function (cName) {
        if (showIndex && cName === indexName) {
            return <td>{index}</td>;
        }
        return (<td>
                  {item[cName]}
                </td>);
    })}
        </tr>; })}
    </tbody>
  </table>;
};
export default React.memo(ReactTable);
