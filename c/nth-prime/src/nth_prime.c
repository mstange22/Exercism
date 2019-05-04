#include "nth_prime.h"
#include <stdbool.h>
#include <math.h>

bool is_prime(int n)
{
  for (int i = 2; i <= sqrt(n); i++)
  {
    if (n % i == 0)
    {
      return false;
    }
  }
  return true;
}

int nth(int n)
{
  int num_primes = 0;
  for (int i = 2; num_primes < n; i++)
  {
    if (is_prime(i))
    {
      num_primes++;
      if (num_primes == n)
      {
        return i;
      }
    }
  }
  return 0;
}
