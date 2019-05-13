from collections import defaultdict

def find_minimum_coins(total_change, coins):
  if total_change == 0:
    return []
  if total_change < 0:
    raise ValueError('negative total_change parameter')
  if total_change < min(coins):
    raise ValueError('total_change parameter too small for coins')

  memo = defaultdict(list)
  recursive_change(total_change, list(reversed(coins)), memo)
  if memo[total_change] == []:
    raise ValueError('no combination of coins can make total_change')
  return memo[total_change]


def recursive_change(total_change, coins, memo):
  if total_change == 0:
    memo[0] = []
    return
  if total_change == 1:
    if 1 in coins:
      memo[1] = [1]
    return

  res = []

  for coin in coins:
    if total_change >= coin:
      if memo[total_change - coin] == []:
        recursive_change(total_change - coin, coins, memo)

      if total_change - coin == 0 or memo[total_change - coin]:
        temp_res = memo[total_change - coin] + [coin]
        if len(res) == 0 or len(temp_res) < len(res):
          res = temp_res

  memo[total_change] = res