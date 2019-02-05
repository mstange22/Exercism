from math import sqrt

def score(x, y):
  rad = sqrt(x * x + y * y)
  if rad <= 1:
    return 10
  if rad <= 5:
    return 5
  if rad <= 10:
    return 1
  return 0

  
