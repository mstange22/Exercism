#include "roman_numerals.h"

struct RomanMap {
  int num;
  std::string roman;
};

const int MAP_LENGTH = 13;

RomanMap ROMAN[MAP_LENGTH] = {
  {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
  {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
  {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}
};

std::string roman::convert(int n) {
  std::string res = "";

  for (int i = 0; i < MAP_LENGTH; i++) {
    while (n >= ROMAN[i].num) {
      res += ROMAN[i].roman;
      n -= ROMAN[i].num;
    }
  }
  return res;
}