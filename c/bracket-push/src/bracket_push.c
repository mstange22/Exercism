#include "bracket_push.h"
#include <string.h>
#include <stdlib.h>

static char *STACK;

void add(const char c)
{
  char temp[2] = {c};
  strcat(STACK, temp);
}

bool check(const char c)
{
  if (STACK[strlen(STACK)-1] != c)
  {
    return false;
  }
  STACK[strlen(STACK)-1] = '\0';
  return true;
}

bool is_paired(const char *input) {
  STACK = malloc(1);
  STACK[0] = '\0';

  for (int i = 0, n = strlen(input); i < n; i++)
  {
    switch (input[i])
    {
      case '[':
        add(']');
        break;
      case '{':
        add('}');
        break;
      case '(':
        add(')');
        break;
      case ']':
        if (!check(']'))
        {
          return false;
        }
        break;
      case '}':
        if (!check('}'))
        {
          return false;
        }
        break;
      case ')':
        if (!check(')'))
        {
          return false;
        };
        break;
      default:
        break;
    }
  }
  int len = strlen(STACK);
  free(STACK);
  return len == 0;
}
