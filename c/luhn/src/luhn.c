#include "luhn.h"
#include <string.h>
#include <stdlib.h>

bool luhn(const char *num)
{
  int length = strlen(num);

  // strip spaces
  char* stripped = (char*)malloc(sizeof(char));
  *stripped = '\0';
  int stripped_index = 0;
  for (int i = 0; i < length; i++) {
    if (num[i] != ' ') {
      stripped[stripped_index++] = num[i];
      if (!realloc(stripped, (stripped_index + 1) * sizeof(char))) {
        return false;
      };
    }
  }
  stripped[stripped_index] = '\0';
  length = strlen(stripped);

  // error edge case
  if (length <= 1) {
    return false;
  }

  int sum = 0;
  int digit_counter = 1;
  
  // start at end of digits, work right-to-left
  for (int i = length - 1; i >= 0; i--) {
    if (stripped[i] >= '0' && stripped[i] <= '9') {
      int digit = stripped[i] - '0';
      if (digit_counter % 2 == 0) {
        // double every second digit.  If greater than 9, subtract 9
        sum += digit * 2 > 9 ? digit * 2 - 9: digit * 2;
      } else {
        sum += digit;
      }
      digit_counter++;
    } else {
      return false; // fail on non-digit
    }
  }
  return sum % 10 == 0;
}
