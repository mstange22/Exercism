#include "binary_search.h"
#include <stdio.h>

int *binary_search(int value, int arr[], size_t length)
{
  if (!arr || length == 0) return NULL;
  int min = 0;
  int max = length - 1;
  while (min != max)
  {
    int mid = (min + max) / 2;
    if (value == arr[mid]) return &arr[mid];
    if (value > arr[mid])
    {
      min = mid + 1;
    }
    else
    {
      max = mid - 1;
    }
  }
  return arr[min] == value? &arr[min] : NULL;
}
