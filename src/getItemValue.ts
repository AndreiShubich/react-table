const getItemValue = (item: any) => {
  if (item instanceof Object) {
    if (typeof item === 'function') {
      return 'ƒ';
    }

    if (Array.isArray(item)) {
      return `Array(${item.length})`;
    }

    if (item instanceof Map) {
      return `Map(${item.size})`;
    }

    if (item instanceof Set) {
      return `Set(${item.size})`;
    }

    if (item instanceof WeakMap) {
      return 'WeakMap';
    }

    if (item instanceof WeakSet) {
      return 'WeakSet';
    }

    return '{...}';
  }

  if (typeof item === 'symbol') {
    return item.toString();
  }

  return `${item}`;
};

export default getItemValue;
