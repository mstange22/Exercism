const isSublist = (list1, list2) => {
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] === list1[0]) {
      for (let j = 1; j + i < list2.length; j++) {
        if (list1[j] !== list2[i + j]) {
          break;
        }
        if (j === list1.length - 1) {
          return true;
        }
      }
    }
  }
  return false;
};

export class List {
  constructor(list = []) {
    this.list = list;
    this.length = list.length;
  }

  compare(list2) {
    if (this.length === 0) {
      if (list2.length === 0) {
        return 'EQUAL';
      }
      return 'SUBLIST';
    }
    if (list2.length === 0) {
      return 'SUPERLIST';
    }
    if (this.list.toString() === list2.list.toString()) {
      return 'EQUAL';
    }
    if (isSublist(this.list, list2.list)) {
      return 'SUBLIST';
    }
    if (isSublist(list2.list, this.list)) {
      return 'SUPERLIST';
    }
    return 'UNEQUAL';
  }
}
