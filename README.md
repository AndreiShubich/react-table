# @shubich/react-table

React component for rendering lists to html table

[![NPM registry](https://img.shields.io/npm/v/@shubich/react-table.svg?style=for-the-badge)](https://www.npmjs.com/package/@shubich/react-table)

## Install

```bash
# NPM
npm install @shubich/react-table
```

## Usage

### Input

```js
const cars = [
  {
    mark: "BMW",
    model: "i8",
  },
  {
    mark: "Porsche",
    model: "911",
  },
  {
    mark: "Tesla",
    model: "Model S",
    ["0-60 mph"]: "2.4s"
  }
];

<ReactTable 
    data={cars}
    showIndex={true}
    indexName='id'
/>;
```

### Output

| id | mark      | model   | 0-60 mph |
| -- |-----------| --------|----------|
| 0  | BMW       | i8      |          |
| 1  | Porsche   | 911     |          |
| 2  | Tesla     | Model S | 2.4s     |

## Examples

[CodeSandbox](https://codesandbox.io/s/shubichreact-table-z5rs4)

## License

@shubich/react-table is [MIT licensed](https://github.com/shubich/react-table/blob/master/LICENSE).