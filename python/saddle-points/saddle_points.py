def saddle_points(matrix):
  res = set()
  for i, row in enumerate(matrix):
    for j, num in enumerate(row):
      try:
        column = [x[j] for x in matrix]
      except IndexError:
        raise ValueError('Irregular matrix')
      
      if num >= max(row) and num <= min(column):
        res.add((i + 1, j + 1))
  return res

