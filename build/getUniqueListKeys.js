var getUniqueListKeys = function (list) {
    var uniqueKeys = list.reduce(function (acc, item) {
        var itemKeys = Object.keys(item);
        var newKeys = itemKeys.filter(function (key) { return !acc.includes(key); });
        return acc.concat(newKeys);
    }, []);
    return uniqueKeys;
};
export default getUniqueListKeys;
