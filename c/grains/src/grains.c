#include "grains.h"
#include <limits.h>

unsigned long long square(unsigned long long n)
{
  if (n < 1 || n > 64) return 0;
  return 1ull << (n - 1ull);
}

unsigned long long total()
{
  // we want 2^64 - 1 which is the maximum unsigned
  // 64-bit integer.  This means 2^64 (or 1 << 64) is
  // outisde the bounds of an unsigned long long.
  // I brought in limits.h to get the max value 
  return ULONG_MAX;
}
