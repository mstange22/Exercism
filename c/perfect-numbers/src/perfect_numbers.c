#include "perfect_numbers.h"

kind classify_number(int n)
{
  if (n < 1) return ERROR;
  int sum = 1;
  for (int i = n / 2; i > 1; i--)
  {
    if (n % i == 0)
    {
      sum += i;
    }
  }
  if (sum == 1 || sum < n)
  {
    return DEFICIENT_NUMBER;
  }
  if (sum == n)
  {
    return PERFECT_NUMBER;
  }
  return ABUNDANT_NUMBER;
}
