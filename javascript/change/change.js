class Change {
  calculate(coins, change) {
    if (change < 0) throw new Error();
    if (change === 0) return [];
    if (change < Math.min(...coins)) throw new Error();

    const memo = {};
    this.recursiveChange(change, coins.reverse(), memo);
    if (memo[change].length === 0) {
      throw new Error();
    }
    return memo[change];
  }

  recursiveChange(change, coins, memo) {
    if (change === 0) {
      memo[0] = [];
      return;
    }
    if (change === 1) {
      if (coins.includes(1)) {
        memo[1] = [1];
      }
      return;
    }

    let res = [];

    for (const coin of coins) {
      if (change === 0) return;
      if (change >= coin) {
        if (!memo[change - coin]) {
          this.recursiveChange(change - coin, coins, memo);
        }
      }
  
      if (change - coin === 0 || memo[change - coin] && memo[change - coin].length > 0) {
        const temp = memo[change - coin].concat([coin]);
        if (res.length === 0 || temp.length < res.length) {
          res = temp;
        }
      }
    }
    memo[change] = res;
  }
}

export { Change };
