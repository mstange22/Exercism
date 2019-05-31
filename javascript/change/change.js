class Change {
  calculate(coins, change) {
    if (change < 0) throw new Error();
    if (change === 0) return [];
    if (change < Math.min(...coins)) throw new Error();
    const res = [];
    coins.reverse().forEach((coin) => {
      while (change >= coin) {
        res.push(coin);
        change -= coin;
      }
    });
    return res.reverse();
  }
}

export { Change };
