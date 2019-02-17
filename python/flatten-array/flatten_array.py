def flatten(iterable):
  res = []

  for i in iterable:
    if i != None:
      if type(i) is int or type(i) is str:
        res.append(i)
      else:
        res += flatten(i)

  return res