const SumOfMultiples = (nums: number[]) => {
  return {
    to: (limit: number) => {
      const res = new Set()
      for (let i = Math.min(...nums); i < limit; i++) {
        for (const num of nums) {
          if (i % num === 0) {
            res.add(i);
          }
        }
      }
      return Array.from(res).reduce((accum, el) => accum + el, 0);
    }
  }
}

export default SumOfMultiples