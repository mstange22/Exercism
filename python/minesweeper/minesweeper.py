def board(arr):
  res = []
  validate_lengths(arr)
  for i, row in enumerate(arr):
    res_row = ''
    for j, cell in enumerate(row):
      if cell == '*':
        res_row += '*'
      else:
        if (cell != ' '):
          raise ValueError('invalid input')
        mine_count = sum([1 for k in range(i-1, i+2) for l in range(j-1, j+2) if k >= 0 and k < len(arr) and l >= 0 and l < len(arr[k]) and arr[k][l] == '*'])
        res_row += ' ' if mine_count == 0 else str(mine_count)
    res.append(res_row)
  return res

def validate_lengths(arr):
  if len(set(len(row) for row in arr)) > 1:
    raise ValueError('different lengths')