# recursively find possible change combinations starting with index
def dfs(total_change, coins, index, res):
  curr_res = []
  for i, coin in enumerate(coins[index:]):
    curr_total_change = total_change
    temp_res = []
    if curr_total_change >= coin:
      curr_total_change -= coin
      temp_res.append(coin)
      if curr_total_change == 0:
        return res + temp_res
      temp_res = dfs(curr_total_change, coins, index + i, temp_res)
      if len(curr_res) == 0 or len(temp_res) < len(curr_res):
        curr_res = temp_res
  return res + curr_res

def find_minimum_coins(total_change, coins):
  if total_change < 0:
    raise ValueError('Negative')

  coins = list(reversed(coins))
  res = []

  # test solution starting with each possible coin
  for i, coin in enumerate(coins):
    curr_total_change = total_change
    curr_res = []
    if curr_total_change >= coin:
      curr_total_change -= coin
      curr_res.append(coin)
      # call recursive dfs to find all possible change combinations using each valid starting coins
      curr_res = dfs(curr_total_change, coins, i, curr_res)
      if len(res) == 0 or len(curr_res) < len(res):
        res = curr_res

  return list(reversed(res))