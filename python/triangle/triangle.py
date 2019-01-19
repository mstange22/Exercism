def validator(func):
  return lambda x: 0 not in x and sum(x) - max(x) > max(x) and func(x)

@validator
def is_equilateral(sides):
  return len(set(sides)) == 1

@validator
def is_isosceles(sides):
  return len(set(sides)) <= 2

@validator
def is_scalene(sides):
  return len(set(sides)) == 3