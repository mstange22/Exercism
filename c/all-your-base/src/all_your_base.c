#include "all_your_base.h"
#include <math.h>

size_t rebase(int8_t digits[], int16_t input_base, int16_t output_base, size_t input_length)
{
  if (digits[0] == 0) return 0;
  if (input_base <= 1) return 0;
  if (output_base <= 1) return 0;

  int base_10_num = 0;
  int exp = 0;

  // convert to base 10
  for (int i = input_length - 1; i >= 0; i--)
  {
    if (digits[i] < 0 || digits[i] >= input_base) return 0;
    base_10_num += digits[i] * pow(input_base, exp++);
  }

  size_t output_length = 0;
  int8_t temp[DIGITS_ARRAY_SIZE];

  while (base_10_num > 0)
  {
    temp[output_length++] = base_10_num % output_base;
    base_10_num /= output_base;
  }

  // write temp into digits backwards
  for (size_t i = 0; i < output_length; i++)
  {
    digits[output_length - 1 - i] = temp[i];
  }
  return output_length;
}
