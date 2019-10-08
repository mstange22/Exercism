#include "armstrong_numbers.h"
#include <math.h>

#define MAX_LENGTH 16

bool is_armstrong_number(int n)
{
  char digits[MAX_LENGTH];
  int original = n;
  int length = 0;
  int sum = 0;

  for (int i = 0; i < MAX_LENGTH && n > 0; i++, length++)
  {
    digits[i] = (n % 10) + '0';
    n /= 10;
  }

  digits[length] = '\0';

  for (int i = 0; i < length; i++) {
    sum += (int)pow(digits[i] - '0', length);
  }

  return original == sum;
}
