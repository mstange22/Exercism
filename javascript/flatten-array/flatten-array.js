export class Flattener {
  flatten(list) {
    return list.reduce((accum, el) => {
      if (el !== undefined && el !== null) {
        accum = accum.concat(el instanceof Array ? this.flatten(el) : [el]);
      }
      return accum;
    }, []);
  }
}
