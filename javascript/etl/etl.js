export default (obj) =>
  Object.keys(obj).reduce((accum, key) => {
    obj[key].forEach(value => {
      accum[value.toLowerCase()] = Number(key);
    });
    return accum;
  }, {});
