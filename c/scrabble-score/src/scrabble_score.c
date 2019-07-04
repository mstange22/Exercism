#include "scrabble_score.h"
#include <string.h>
#include <ctype.h>

letter_map scrabble[] = {
  {"AEIOULRNST", 1},
  {"DG", 2},
  {"BCMP", 3},
  {"FHVWY", 4},
  {"K", 5},
  {"JX", 8},
  {"QZ", 10},
};

#define MAP_ENTRIES 7

int get_letter_score(char letter)
{
  for (int i = 0; i < MAP_ENTRIES; i++)
  {
    char *letters = scrabble[i].letters;
    for (int j = 0, n = strlen(letters); j < n; j++)
    {
      if (letters[j] == letter)
      {
        return scrabble[i].value;
      }
    }
  }
  return 0;
}

int score(char *word)
{
  int score = 0;
  for (int i = 0, n = strlen(word); i < n; i++)
  {
    score += get_letter_score(toupper(word[i]));
  }
  return score;
}
