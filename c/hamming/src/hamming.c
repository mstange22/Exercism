#include "hamming.h"
#include <string.h>

int compute(char *s1, char *s2)
{
  if (!s1 || !s2) return -1;
  int len = strlen(s1);
  if (len != (int)strlen(s2)) return -1;
  int distance = 0;

  for (int i = 0; i < len; i++)
  {
    if (s1[i] != s2[i])
    {
      distance++;
    }
  }
  return distance;
}
