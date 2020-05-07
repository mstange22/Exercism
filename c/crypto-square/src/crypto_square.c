#include "crypto_square.h"
#include "string.h"
#include "ctype.h"
#include "math.h"
#include "stdlib.h"

#include "stdio.h"

char *ciphertext(const char *input) {
  size_t len = strlen(input);
  char normalized[len + 1];
  size_t count = 0;
  for (size_t i = 0; i < len; i++) {
    char c = tolower(input[i]);
    if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
      normalized[count++] = c;
    }
  }
  normalized[count] = '\0';
  size_t normalized_len = strlen(normalized);
  size_t columns = ceil(sqrt(normalized_len));
  size_t rows = columns == 0 ? 0 : ceil((float)normalized_len / (float)columns);

  char chunks[rows][columns + 1];

  for (size_t i = 0; i < rows; i ++) {
    memcpy(chunks[i], &normalized[i * columns], columns);
    chunks[i][columns] = '\0';
  }

  // allocate space for all chunk characters, spaces and \0
  char *res = malloc(((rows * columns) + rows + 1) * sizeof(char));
  count = 0;

  for (size_t column = 0; column < columns; column++) {
    for (size_t row = 0; row < rows; row++) {
      res[count++] = chunks[row][column] ? chunks[row][column] : ' ';
    }
    res[count++] = ' ';
  }
  
  res[count - 1] = '\0';

  return res;
}
