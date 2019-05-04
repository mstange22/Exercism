#include "prime_factors.h"

size_t find_factors(long n, uint64_t *buf)
{
  size_t num_factors = 0;
  int test_factor = 2;
  while (n > 1)
  {
    if (n % test_factor == 0)
    {
      buf[num_factors++] = test_factor;
      n /= test_factor;
    }
    else
    {
      test_factor++;
    }
  }
  return num_factors;
}
