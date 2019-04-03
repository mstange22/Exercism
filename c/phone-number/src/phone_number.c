#include "phone_number.h"
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

char *phone_number_clean(const char input[])
{
  char *res = malloc(11);
  int length = strlen(input);
  int count = 0;
  int error = 0;

  for (int i = 0; i < length; i++) {
    if (isdigit(input[i]))
    {
      // ignore leading 1
      if (count != 0 || input[i] != '1')
      {
        res[count++] = input[i];
      }
    } else if (isalpha(input[i])) {
      error = 1;
      break;
    } else {
      switch (input[i]) {
        case ' ':
        case '-':
        case '.':
        case '+':
        case '(':
        case ')':
          break;
        default:
          error = 1;
      }
      if (error) {
        break;
      }
    }
  }

  if (error || count != 10 || res[0] < '2' || res[3] < '2')
  {
    for (int i = 0; i < 10; i++)
    {
      res[i] = '0';
    }
  }

  res[10] = '\0';
  return res;
}
