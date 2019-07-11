import { IObject } from './types';

const getUniqueListKeys = (list: IObject[]): string[] => {
  const uniqueKeys = list.reduce((acc: string[], item) => {
    const itemKeys = Object.keys(item);
    const newKeys = itemKeys.filter(key => !acc.includes(key));

    return [...acc, ...newKeys];
  }, []);

  return uniqueKeys;
};

export default getUniqueListKeys;
