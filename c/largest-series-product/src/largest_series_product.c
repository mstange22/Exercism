#include "largest_series_product.h"
#include "string.h"

int64_t largest_series_product(char *digits, size_t span) {
  size_t len = strlen(digits);
  if (span > len) {
    return -1;
  }
  int64_t largest = 0;
  for (size_t i = 0; i < len - span + 1; i++) {
    int64_t prod = 1;
    for (size_t j = i; j < i + span; j++) {
      int digit = digits[j] - '0';
      if (digit < 0 || digit > 9) {
        return -1;
      }
      prod *= digit;
    }
    if (prod > largest) {
      largest = prod;
    }
  }
  return largest;
}
