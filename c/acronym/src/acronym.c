#include "acronym.h"
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char *abbreviate(const char *phrase) {
  if (!phrase || strlen(phrase) == 0)
  {
    return NULL;
  }

  char temp_phrase[strlen(phrase) + 1];
  strcpy(temp_phrase, phrase);

  char *res = calloc(1, 1);
  char *token = strtok(temp_phrase, "- ");
  res[0] = toupper(token[0]);

  while ((token = strtok(NULL, "- ")))
  {
    char *new_char = calloc(1, 1);
    *new_char = toupper(token[0]);
    strcat(res, new_char);
  }

  return res;
}
