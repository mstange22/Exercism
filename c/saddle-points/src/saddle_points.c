#include "saddle_points.h"
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define MAX_UINT8 255

static uint8_t ROW_MAX[MAX_UINT8];
static uint8_t COLUMN_MIN[MAX_UINT8];

static uint8_t get_row_max(uint8_t columns, uint8_t row[columns]) {
  uint8_t max = 0;
  for (size_t i = 0; i < columns; i++) {
    if (row[i] > max) {
      max = row[i];
    }
  }
  return max;
}

static uint8_t get_column_min(uint8_t column, uint8_t rows, uint8_t columns, uint8_t matrix[rows][columns]) {
  uint8_t min = MAX_UINT8;
  for (size_t i = 0; i < rows; i++) {
    if (matrix[i][column] < min) {
      min = matrix[i][column];
    }
  }
  return min;
}

static void populate_min_max_arr(size_t rows, size_t columns, uint8_t matrix[rows][columns]) {
  for (size_t i = 0; i < rows; i++) {
    ROW_MAX[i] = get_row_max(columns, matrix[i]);
  }
  for (size_t i = 0; i < columns; i++) {
    COLUMN_MIN[i] = get_column_min(i, rows, columns, matrix);
  }
}

saddle_points_t *saddle_points(size_t rows, size_t columns, uint8_t matrix[rows][columns]) {
  size_t count = 0;
  saddle_point_t *points = malloc(sizeof(saddle_point_t*));
  populate_min_max_arr(rows, columns, matrix);
  for (size_t i = 0; i < rows; i++) {
    for (size_t j = 0; j < columns; j++) {
      if (matrix[i][j] == ROW_MAX[i] && matrix[i][j] == COLUMN_MIN[j]) {
        count++;
        points = realloc(points, count * sizeof(saddle_point_t));
        points[count - 1] = (saddle_point_t){ i + 1, j + 1 };
      }
    }
  }
  
  saddle_points_t *res = (saddle_points_t*)malloc(sizeof(saddle_points_t));
  if (!res) return NULL;
  res->count = count;
  memcpy(res->points, points, count * sizeof(saddle_point_t));
  free(points);
  return res;
}

void free_saddle_points(saddle_points_t *points) {
  if (points) {
    free(points);
  }
}
