#include "sum_of_multiples.h"

int sum_of_multiples(const unsigned int factors[], const int num_factors, const int max)
{
  if (!factors) return 0;
  int sum = 0;

  for (int i = 1; i < max; i++)
  {
    // check if number is a multiple of any factor
    for (int j = 0; j < num_factors; j++)
    {
      // ignore zero
      if (factors[j] && i % factors[j] == 0)
      {
        sum += i;
        break;
      }
    }
  }

  return sum;
}
