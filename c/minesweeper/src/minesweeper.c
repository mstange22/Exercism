#include "minesweeper.h"
#include <stdlib.h>
#include <string.h>

static char get_mine_count(const char **minefield, int rows, int columns, int i, int j) {
  int count = 0;

  if (i > 0 && j > 0 && minefield[i - 1][j - 1] == '*') count++;
  if (i > 0 && minefield[i - 1][j] == '*') count++;
  if (i > 0 && j < columns - 1 && minefield[i - 1][j+1] == '*') count++;

  if (j > 0 && minefield[i][j - 1] == '*') count++;
  if (j < columns - 1 && minefield[i][j + 1] == '*') count++;

  if (i < rows - 1 && j > 0 && minefield[i + 1][j - 1] == '*') count++;
  if (i < rows - 1 && minefield[i + 1][j] == '*') count++;
  if (i < rows - 1 && j < columns - 1 && minefield[i + 1][j + 1] == '*') count++;

  return count == 0 ? ' ' : count + '0';
}

char **annotate(const char **minefield, int rows) {
  if (!minefield) return NULL;

  char **new_minefield = (char**)malloc(sizeof(char*) * rows);
  if (!new_minefield) return NULL;

  int columns = strlen(minefield[0]);

  // annotate new minefield
  for (int i = 0; i < rows; i++) {
    char *new_row = (char*)malloc(sizeof(char) * (columns + 1));
    if (!new_row) return NULL;

    for (int j = 0; j < columns; j++) {
      if (minefield[i][j] != '*') {
        new_row[j] = get_mine_count(minefield, rows, columns, i, j);
      } else {
        new_row[j] = '*';
      }
    }
    new_row[columns] = '\0';
    new_minefield[i] = new_row;
  }
  return new_minefield;
}

void free_annotation(char **annotation) {
  if (!annotation) return;
  int rows = sizeof(annotation) / sizeof(annotation[0]);
  for (int i = 0; i < rows; i++) {
    if (annotation[i]) {
      free(annotation[i]);
    }
  }
  free(annotation);
}
