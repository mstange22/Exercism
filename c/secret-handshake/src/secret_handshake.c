#include "secret_handshake.h"
#include <string.h>
#include <stdlib.h>
#include <math.h>

const char *events[] = {"wink", "double blink", "close your eyes", "jump"};

const char **commands(int n) {
  const char **res = (const char **)calloc(sizeof(const char **), 4);
  int index = 0;

  // reversed
  if (n & 16)
  {
    // loop through valid powers of 2
    for (int i = 3; i >= 0; i--)
    {
      // if power ands with n, add that event to res
      if (n & (int)pow(2, i))
      {
        res[index++] = events[i];
      }
    }
  }
  else
  {
    // same thing, unreversed
    for (int i = 0; i < 4; i++)
    {
      if (n & (int)pow(2, i))
      {
        res[index++] = events[i];
      }
    }
  }
  return res;
}
