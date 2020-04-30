#include "diamond.h"
#include "stdlib.h"
#include "math.h"

char **make_diamond(const char letter) {
    int diff = letter - 'A';
    int size = 1 + 2 * diff;

    char **res = malloc(size * sizeof(char*));
    if (!res) return NULL;

    for (int i = 0; i < size; i++) {
      res[i] = malloc((size + 1) * sizeof(char*));
      if (!res[i]) return NULL;

      for (int j = 0; j < size; j++) {
        int offset = abs(diff - i);
        res[i][j] = j == offset || j == size - 1 - offset ? letter - offset : ' ';
      }
      res[i][size] = '\0';
    }
    return res;
}
