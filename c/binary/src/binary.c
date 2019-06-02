#include "binary.h"
#include <string.h>
#include <math.h>

int convert(char *s)
{
  int res = 0;
  int length = strlen(s);
  for (int i = 0; i < length; i++)
  {
    if ((int)s[length - 1 - i] - '0' > 1)
    {
      return 0;
    }
    res += ((int)s[length - 1 - i] - '0') * pow(2, i); 
  }
  return res;
}
