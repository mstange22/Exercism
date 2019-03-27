#include "atbash_cipher.h"
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

#define ENCODE 1
#define DECODE 2

char *do_work(char *s, int type)
{
  int length = strlen(s);
  char *res = malloc(length + (length / 5) + 1);
  res[0] = '\0';
  int index = 0;
  for (int i = 0; i < length; i++)
  {
    char c = s[i];
    if (isalpha(c) || isdigit(c))
    {
      if (index % 6 == 5 && type == ENCODE)
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

char *atbash_encode(char *s)
{
  return do_work(s, ENCODE);
}

char *atbash_decode(char *s)
{
  return do_work(s, DECODE);
}
