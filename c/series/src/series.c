#include "series.h"
#include <string.h>
#include <stdlib.h>

series_results_t series(char *input_text, unsigned int substring_length)
{
  int input_length = strlen(input_text);
  int num_substrings = substring_length == 0 ? 0 : (int)(input_length - substring_length + 1);
  char **substrings = (char**)malloc(num_substrings*sizeof(char*));
  series_results_t res = {
    num_substrings,
    substrings,
  };
  for (int i = 0; i < (int)(input_length - substring_length + 1); i++)
  {
    char *substring = malloc(substring_length + 1);
    int index = 0;
    for (int j = i; j < (int)(i + substring_length); j++) {
      substring[index++] = input_text[j];
    }
    substring[index] = '\0';
    res.substring[i] = substring;
  }
  return res;
}
