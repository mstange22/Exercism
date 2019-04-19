#include "phone_number.h"
#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <stdbool.h>

static bool is_valid_non_digit(const char c)
{
    switch (c) {
      case ' ':
      case '-':
      case '.':
      case '+':
      case '(':
      case ')':
        return true;
      default:
        return false;
    }
}

static void build_error_number(char **res)
{
    for (int i = 0; i < 10; i++)
    {
      (*res)[i] = '0';
    }
}

char *phone_number_clean(const char input[])
{
  char *res = malloc(11);
  const int length = strlen(input);
  int count = 0;
  bool error = false;

  for (int i = 0; i < length && !error; i++) {
    const char c = input[i];
    if (isdigit(c))
    {
      // ignore leading 1
      if (count != 0 || c != '1')
      {
        res[count++] = c;
      }
    } else if (isalpha(c)) {
      error = true;
    } else {
        error = !is_valid_non_digit(c);
    }
  }

  if (error || count != 10 || res[0] < '2' || res[3] < '2')
  {
    build_error_number(&res);
  }

  res[10] = '\0';
  return res;
}
