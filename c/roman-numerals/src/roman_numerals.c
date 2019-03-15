#include "roman_numerals.h"
#include <string.h>
#include <stdlib.h>

#define NUM_ROMAN 13

typedef struct {
  int arabic;
  char roman[3];
} roman_map;

roman_map ROMAN_NUMERALS[NUM_ROMAN] = {
  { 1000, { "M\0" } },
  { 900, { "CM\0" } },
  { 500, { "D\0" } },
  { 400, { "CD\0" } },
  { 100, { "C\0" } },
  { 90, { "XC\0" } },
  { 50, { "L\0" } },
  { 40, { "XL\0" } },
  { 10, { "X\0" } },
  { 9, { "IX\0" } },
  { 5, { "V\0" } },
  { 4, { "IV\0" } },
  { 1, { "I\0" } },
};

char *to_roman_numeral(int n)
{
  char *res = malloc(1);
  if (res == NULL) return NULL;
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
