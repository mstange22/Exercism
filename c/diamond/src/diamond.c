#include "diamond.h"
#include "stdlib.h"

// helper to add spaces to a string
void add_spaces(char **string, int index, int num_spaces) {
  for (int i = index; i < index + num_spaces; i++) {
    (*string)[i] = ' ';
  }
}

char **make_diamond(const char letter) {
    int diff = letter - 'A';
    int num_lines = 1 + 2 * diff;
    int line_length = num_lines;
    int curr_line = 0;

    char **res = malloc(num_lines * sizeof(char*));
    if (!res) return NULL;

    // build top of diamond
    for (int i = 0; i <= num_lines / 2; i++) {
      char curr_letter = 'A' + i;
      int outer_spaces_count = letter - curr_letter;
      int inner_spaces_count = (2 * (i - 1)) + 1;

      char *line = malloc((line_length + 1) * sizeof(char));
      if (!line) return NULL;

      int curr_line_index = 0;

      // outer spaces
      add_spaces(&line, curr_line_index, outer_spaces_count);
      curr_line_index += outer_spaces_count;

      // letter
      line[curr_line_index++] = curr_letter;

      // inner spaces & 2nd letter
      if (curr_letter != 'A') {
        add_spaces(&line, curr_line_index, inner_spaces_count);
        curr_line_index += inner_spaces_count;
        line[curr_line_index++] = curr_letter;
      }

      // outer spaces
      add_spaces(&line, curr_line_index, outer_spaces_count);
      curr_line_index += outer_spaces_count;

      line[curr_line_index] = '\0'; // don't forget me!
      res[curr_line++] = line;
    }

    // invert top to create bottom
    for (int i = num_lines / 2 - 1; i >= 0; i--) {
      res[curr_line++] = res[i];
    }

    return res;
}
