#include "roman_numerals.h"
#include <string.h>
#include <stdlib.h>

#define NUM_ROMAN 13

typedef struct {
  int arabic;
  char roman[2];
} roman_map;

roman_map ROMAN_NUMERALS[NUM_ROMAN] = {
  { 1000, { "M" } },
  { 900, { "CM" } },
  { 500, { "D" } },
  { 400, { "CD" } },
  { 100, { "C" } },
  { 90, { "XC" } },
  { 50, { "L" } },
  { 40, { "XL" } },
  { 10, { "X" } },
  { 9, { "IX" } },
  { 5, { "V" } },
  { 4, { "IV" } },
  { 1, { "I" } },
};

char *to_roman_numeral(int n)
{
  char *res = malloc(1);
  res[0] = '\0';

  for (int i = 0; i < NUM_ROMAN; i++)
  {
    while (n >= ROMAN_NUMERALS[i].arabic)
    {
      res = strcat(res, ROMAN_NUMERALS[i].roman);
      n -= ROMAN_NUMERALS[i].arabic;
    }
  }
  return res;
}
