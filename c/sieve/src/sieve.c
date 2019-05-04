#include "sieve.h"
#include <math.h>

unsigned int sieve(const unsigned int limit, primes_array_t primes)
{
  int prime_count = 0;
  int marked_array[MAX_LIMIT_TESTED + 1] = {0};
  for (unsigned int i = 2; i <= limit; i++) {
    if (!marked_array[i])
    {
      primes[prime_count++] = i;
      for (unsigned int j = i; j <= limit; j += i)
      {
        marked_array[j] = 1;
      }
    }
  }
  return prime_count;
}
