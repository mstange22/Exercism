def prime_factors(natural_number):
  factor = 2
  factors = []
  while natural_number > 1:
    if natural_number % factor == 0:
      natural_number /= factor
      factors.append(factor)
    else:
      factor += 1
  
  return factors