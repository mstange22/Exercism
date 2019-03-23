#include "atbash_cipher.h"
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

#define MAX_LENGTH 256

char *atbash_encode(char *s)
{
  char *res = malloc(MAX_LENGTH);
  res[0] = '\0';
  int index = 0;
  for (int i = 0, n = strlen(s); i < n; i++)
  {
    char c = s[i];
    if (isalpha(c) || isdigit(c))
    {
      if (index % 6 == 5)
      {
        res[index++] = ' ';
      }
      if (isalpha(c))
      {
        int shift = tolower(c) - 'a';
        int new_char = 'z' - shift;
        res[index++] = new_char;
      }
      else
      {
        res[index++] = c;
      }
      res[index] = '\0';
    }
  }
  return res;
}

char *atbash_decode(char *s)
{
  char *res = malloc(MAX_LENGTH);
  res[0] = '\0';
  int index = 0;
  for (int i = 0, n = strlen(s); i < n; i++)
  {
    char c = s[i];
    if (isalpha(c))
    {
      int shift = 'z' - c;
      int new_char = 'a' + shift;
      res[index++] = new_char;
    }
    else if (isdigit(c))
    {
      res[index++] = c;
    }
    res[index] = '\0';
  }
  return res;
}
