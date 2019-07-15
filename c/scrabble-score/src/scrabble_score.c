#include "scrabble_score.h"
#include <string.h>
#include <ctype.h>

int score(char *word)
{
  // map of scrabble points for letters, indexed by ascii values (0 = 'A', 25 = 'Z') 
  int scrabble_map[] = {
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10
  };
  int score = 0;
  for (int i = 0, n = strlen(word); i < n; i++) {
    char c = toupper(word[i]);
    if (c >= 'A' && c <= 'Z') {
      score += scrabble_map[c - 'A'];
    }
  }
  return score;
}
