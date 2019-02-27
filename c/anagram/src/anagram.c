#include "anagram.h"
#include <string.h>
#include <ctype.h>

void anagrams_for(const char *word, struct candidates *candidates)
{
   for (int i = 0; i < (int)candidates->count; i++) {
      if (is_anagram(word, candidates->candidate[i].candidate))
      {
        candidates->candidate[i].is_anagram = IS_ANAGRAM;
      }
      else
      {
        candidates->candidate[i].is_anagram = NOT_ANAGRAM;
      }
   }
}

int is_anagram(const char *word, const char *candidate)
{
  size_t length = strlen(word);
  if (length != strlen(candidate) || strcasecmp(word, candidate) == 0)
  {
    return 0;
  }

  // copy candidate so we can modify
  char *temp = calloc(length + 1, 1);
  strcpy(temp, candidate);

  // for each char in word
  for (size_t i = 0; i < length; i++)
  {
    // check temp candidate
    int found_match = 0;
    for (size_t j = 0; j < strlen(temp); j++)
    {
      if (tolower(temp[j]) == tolower(word[i]))
      {
        // found match - remove char from temp
        memmove(&temp[j], &temp[j + 1], strlen(temp) - j);
        found_match = 1;
        break;
      }
    }
    // if made it through temp without finding match
    if (!found_match) return 0;
  }
  return strlen(temp) == 0;
}
