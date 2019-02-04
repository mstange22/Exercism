#include "pangram.h"
#include <string.h>
#include <ctype.h>

bool is_pangram(const char *sentence)
{
  if (!sentence) return false;
  char alpha[] = "abcdefghijklmnopqrstuvwxyz";
  char lower[strlen(sentence)];
  // convert sentence tolower()
  for (int i = 0, n = strlen(sentence); i < n; i++) {
    lower[i] = tolower(sentence[i]);
  }
  for (int i = 0, n = strlen(alpha); i < n; i++)
  {
    if (strchr(lower, alpha[i]) == NULL) {
      return false;
    }
  }
  return true;
}
