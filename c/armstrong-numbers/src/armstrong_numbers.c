#include "armstrong_numbers.h"
#include <math.h>

#define MAX_LENGTH 16

bool is_armstrong_number(int n)
{
  int digits[MAX_LENGTH];
  int original = n;
  int length = 0;
  int sum = 0;

  for (int i = 0; i < MAX_LENGTH && n > 0; i++, length++)
  {
    digits[i] = (n % 10);
    n /= 10;
  }

  for (int i = 0; i < length; i++) {
    sum += (int)pow(digits[i], length);
  }

  return original == sum;
}
