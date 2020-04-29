#include "etl.h"
#include "stdlib.h"
#include "string.h"
#include "ctype.h"

#define MAX_LENGTH 26

int convert(const legacy_map *input, const size_t input_len, new_map **output) {
  new_map temp[MAX_LENGTH] = { {'\0', 0} };
  int output_len = 0;

  // fill temp array with key/value pairs at alpha position
  for (size_t i = 0; i < input_len; i++) {
    int keys_len = strlen(input[i].keys);
    for (int j = 0; j < keys_len; j++) {
      temp[input[i].keys[j] - 'A'] = (new_map){ tolower(input[i].keys[j]), input[i].value };
      output_len++;
    }
  }
  // allocate appropriate space for output
  *output = malloc(output_len * sizeof(new_map));
  if (!*output) return 0;

  // traverse temp array, adding elements to output in order as found
  for (int temp_index = 0, output_index = 0; temp_index < MAX_LENGTH; temp_index++) {
    if (temp[temp_index].key) {
      (*output)[output_index++] = temp[temp_index];
    }
  }

  return output_len;
}
