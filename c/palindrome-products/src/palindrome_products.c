#include "palindrome_products.h"
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>
#include <math.h>
#include <stdio.h>

bool is_palindrome(int n)
{
  int digits[MAX_LENGTH];
  int count = 0;
  while (n > 0)
  {
    digits[count++] = n % 10;
    n /= 10;
  }

  for (int i = 0; i < count / 2; i++)
  {
    if (digits[i] != digits[count - 1 - i])
    {
      return false;
    }
  }
  return true;
}

void add_factor(factor_t *head, int a, int b)
{
  factor_t *curr = head;
  while (curr->next)
  {
    curr = curr->next;
  }
  curr->next = (factor_t*)malloc(sizeof(factor_t));
  factor_t new_node = {a, b, NULL};
  *curr->next = new_node;
}

product_t *get_palindrome_product(const int lower, const int upper)
{
  int smallest = INT_MAX;
  int largest = 0;
  factor_t *sm;
  factor_t *lg;
  product_t *res = (product_t*)malloc(sizeof(product_t));
  if (lower > upper) {
    res->error = malloc(MAX_LENGTH);
    sprintf(res->error, "invalid input: min is %i and max is %i", lower, upper);
    return res;
  }
  for (int i = lower; i <= upper; i++)
  {
    for (int j = i; j <= upper; j++)
    {
      int prod = j * i;
      if (prod < smallest && is_palindrome(prod))
      {
        smallest = prod;
        sm = (factor_t*)malloc(sizeof(factor_t));
        factor_t new_factor = { i, j, NULL};
        *sm = new_factor;
      }
      else if (prod == smallest)
      {
        add_factor(sm, i, j);
      }
      if (prod > largest && is_palindrome(prod))
      {
        largest = prod;
        lg = (factor_t*)malloc(sizeof(factor_t));
        factor_t new_factor = { i, j, NULL};
        *lg = new_factor;
      }
      else if (prod == largest)
      {
        add_factor(lg, i, j);
      }
    }
  }
  if (largest == 0)
  {
    res->error = malloc(MAX_LENGTH);
    sprintf(res->error, "no palindrome with factors in the range %i to %i", lower, upper);
  }
  res->smallest = smallest;
  res->largest = largest;
  res->factors_sm = sm;
  res->factors_lg = lg;
  return res;
}

void free_product(product_t *product)
{
  free(product);
}
