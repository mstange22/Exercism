#include "palindrome_products.h"
#include <stdlib.h>

product_t *get_palindrome_product(const int lower, const int upper)
{
  product_t *res = malloc(sizeof(product_t));
  for (int i = lower; i <= upper; i++)
  {
    for (int j = lower; j <= upper; j++)
    {

    }
  }
  return res;
}

void free_product(product_t *product)
{
  free(product);
}
