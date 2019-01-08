from functools import reduce

def is_armstrong(number):
  digits = [int(n) ** len(str(number)) for n in str(number)]
  return reduce(lambda x, y: x + y, digits) == number