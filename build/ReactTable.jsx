var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo } from 'react';
import getUniqueListKeys from './getUniqueListKeys';
import getItemValue from './getItemValue';
var ReactTable = function (_a) {
    var data = _a.data, _b = _a.showIndex, showIndex = _b === void 0 ? true : _b, _c = _a.indexName, indexName = _c === void 0 ? '(index)' : _c, tableProps = __rest(_a, ["data", "showIndex", "indexName"]);
    var list = useMemo(function () { return (Array.isArray(data) ? data : [data]); }, [data]);
    var columnNames = useMemo(function () { return getUniqueListKeys(list); }, [list]);
    return (<table {...tableProps}>
      <thead>
        {showIndex && <th>{indexName}</th>}
        {columnNames.map(function (cName) { return <th key={cName}>{cName}</th>; })}
      </thead>
      <tbody>
        {list.map(function (item) { return (<tr>
              {showIndex && <td>{indexName}</td>}
              {columnNames.map(function (cName) { return (<td key={cName}>
                    {getItemValue(item[cName])}
                  </td>); })}
            </tr>); })}
      </tbody>
    </table>);
};
export default React.memo(ReactTable);
