#include "isogram.h"
#include <string.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

bool is_isogram(const char phrase[])
{
  // handle null input
  if (!phrase)
  {
    return false;
  }

  // string of seen letters initialized to empty
  char *seen = malloc(1);
  seen[0] = '\0';

  // loop over phrase, checking letters against map
  for (int i = 0, n = strlen(phrase); i < n; i++)
  {
    // only validate letters
    if (isupper(phrase[i]) || islower(phrase[i]))
    {
      char c = tolower(phrase[i]);
      // char *pointer = );
      if (strchr(seen, c) != NULL)
      {
        free(seen);
        return false;
      }
      else
      {
        char temp[2] = {c};
        strcat(seen, temp);
      }
    }
  }
  free(seen);
  return true;
}
