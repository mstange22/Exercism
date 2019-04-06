def sieve(limit):
  numbers = [0] * (limit+1) 
  primes = []

  n = 2
  while n <= limit:
    if numbers[n] == 0:
      primes.append(n)
      for i in range(n, limit+1, n):
        numbers[i] = 1
    n += 1

  return primes