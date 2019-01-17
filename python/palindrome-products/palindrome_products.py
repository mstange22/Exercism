from itertools import combinations_with_replacement

def get_palindromes(min_factor, max_factor):
  for x, y in combinations_with_replacement(range(min_factor, max_factor + 1), 2):
    prod = str(x * y)
    if prod[::-1] == prod:
      yield int(prod), (x, y)

def largest_palindrome(min_factor, max_factor):
  if min_factor > max_factor: raise ValueError('min_factor greater than max_factor')
  max_prod = 0
  max_tuples = set()
  for prod, factors in get_palindromes(min_factor, max_factor):
    if prod > max_prod:
      max_prod = prod
      max_tuples = { factors }
    if prod == max_prod:
      max_tuples.add(factors)

  if not max_tuples:
    raise ValueError('no palindromes in range')

  return max_prod, max_tuples

def smallest_palindrome(min_factor, max_factor):
  if min_factor > max_factor: raise ValueError('min_factor greater than max_factor')
  min_prod = float('inf')
  min_tuples = set()
  for prod, factors in get_palindromes(min_factor, max_factor):
    if prod < min_prod:
      min_prod = prod
      min_tuples = { factors }
    if prod == min_prod:
      min_tuples.add(factors)
  
  if not min_tuples:
    raise ValueError('No palindromes in range')

  return min_prod, min_tuples