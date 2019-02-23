#include "bob.h"

#include <string.h>
#include <ctype.h>
#include <stdlib.h>

char *hey_bob(char* input)
{
  char *trimmed = calloc(strlen(input) + 1, 1);
  strcpy(trimmed, input);
  trimmed = trim(trimmed);
  if (strlen(trimmed) == 0) return "Fine. Be that way!";
  if (is_all_uppercase(trimmed))
  {
    if (trimmed[strlen(trimmed) - 1] == '?')
    {
      return "Calm down, I know what I'm doing!";
    }
    return "Whoa, chill out!";
  }
  if (trimmed[strlen(trimmed) - 1] == '?')
  {
    return "Sure.";
  }
  return "Whatever.";
}

char *trim(char *str)
{
  // leading spaces
  while(isspace((unsigned char)*str)) str++;
  if (strlen(str) == 0) {
    return str;
  }

  // trailing spaces
  int end = strlen(str) - 1;
  while(end >= 0 && isspace(str[end])) end--;

  // // Write new null terminator character
  if (end < (int)strlen(str) - 1)
  {
    str[end+1] = '\0'; 
  }
  return str;
}

int is_all_uppercase(char *str)
{
  int has_alpha = 0;
  for (int i = 0, n = strlen(str); i < n; i++)
  {
    if (isalpha(str[i])) has_alpha = 1;
    if (toupper(str[i]) != str[i]) return 0;
  }
  return has_alpha;
}
