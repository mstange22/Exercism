#include  "pascals_triangle.h"
#include <stdlib.h>
#include <string.h>

size_t **create_triangle(int height)
{
  if (height < 0)
  {
    return NULL;
  }

  if (height == 0)
  {
    size_t **triangle = malloc(sizeof(size_t*));
    if (triangle == NULL) {
      return NULL;
    }
    memset(triangle, 0, height * sizeof(size_t*));
    size_t *empty = malloc(sizeof(size_t));
    memset(empty, 0, sizeof(size_t)); 
    if (empty == NULL) {
      return NULL;
    }
    empty[0] = 0;
    triangle[0] = empty;
    return triangle;
  }

  size_t **triangle = malloc(height * sizeof(size_t*));
  if (triangle == NULL) {
    return NULL;
  }
  for (int i = 0; i < height; i++)
  {
    size_t *row = malloc(height * sizeof(size_t));
    if (row == NULL) {
      return NULL;
    }
    memset(row, 0, height * sizeof(size_t)); 
    row[0] = 1;
    for (int j = 1; j < height; j++)
    {
      if (i - 1 >= 0) {
        row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
    triangle[i] = row;
  }
  return triangle;
}

void free_triangle(size_t **triangle, int height)
{
  if (!triangle)
  {
    return;
  }
  for (int i = 0; i < height; i++)
  {
    free(triangle[i]);
    triangle[i] = NULL;
  }
  free(triangle);
  triangle = NULL;
}
