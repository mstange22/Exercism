#include  "pascals_triangle.h"
#include <stdlib.h>

size_t **create_triangle(int height)
{
  if (height < 0)
  {
    return NULL;
  }

  if (height == 0)
  {
    size_t **triangle = malloc(sizeof(size_t*));
    size_t *empty = malloc(height * sizeof(size_t));
    empty[0] = 0;
    triangle[0] = empty;
    return triangle;
  }

  size_t **triangle = malloc(height * sizeof(size_t*));

  // first row always starts with 1; followed by {height - 1} zeroes
  size_t *first_row = malloc(height * sizeof(size_t));
  first_row[0] = 1;
  for (int i = 1; i < height; i++)
  {
    first_row[i] = 0;
  }
  triangle[0] = first_row;

  // build all successive rows
  for (int i = 1; i < height; i++)
  {
    size_t *row = malloc(height * sizeof(size_t));
    row[0] = 1;
    for (int j = 1; j < height; j++)
    {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
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
  }
  free(triangle);
}
