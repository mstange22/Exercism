def is_equilateral(sides):
  if 0 in sides:
    return False
  return len(set(sides)) == 1

def is_isosceles(sides):
  if 0 in sides:
    return False
  a, b, c = sides[0], sides[1], sides[2]
  return (a == b or a == c or b == c) and a + b >= c and a + c >= b and b + c >= a

def is_scalene(sides):
  if 0 in sides:
    return False
  a, b, c = sides[0], sides[1], sides[2]
  return sorted(list(set(sides))) == sorted(sides) and a + b >= c and a + c >= b and b + c >= a