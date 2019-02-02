from math import sqrt

def classify(number):
  if number <= 0:
    raise ValueError('Number must be a natural number')
  if number == 1:
    return 'deficient'

  factors = [1]
  root = sqrt(number)
  factor = 2

  while factor <= root:
    if number % factor == 0:
      factors.append(factor)
      if (factor != root):
        factors.append(number / factor)
    factor +=1

  factor_sum = sum(factors)
  if factor_sum == number:
    return 'perfect'
  if factor_sum > number:
    return 'abundant'
  return 'deficient'