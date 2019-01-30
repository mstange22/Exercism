#include "isogram.h"
#include <string.h>
#include <ctype.h>

bool is_isogram(const char phrase[])
{
  // handle null input
  if (!phrase)
  {
    return false;
  }

  // initialize array implementation of a map 
  bool map[26];
  for (int i = 0; i < 26; i++)
  {
    map[i] = false;
  }

  // loop over phrase, checking letters against map
  for (int i = 0, n = strlen(phrase); i < n; i++)
  {
    // only validate letters
    if (isupper(phrase[i]) || islower(phrase[i]))
    {
      int letter_index = (int)(tolower(phrase[i]) - 'a');
      if (map[letter_index])
      {
        return false;
      }
      // add new letters to map
      map[letter_index] = true;
    }
  }
  return true;
}
