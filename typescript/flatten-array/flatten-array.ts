class FlattenArray {
  static flatten(input: any[]) {
    let res: number[] = []
    if (input) {
      input.forEach((el) => {
        if (typeof el === 'number') {
          res.push(el)
        } else {
          res = [...res, ...FlattenArray.flatten(el)]
        }
      })
    }
    return res;
  }
}

export default FlattenArray