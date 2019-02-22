#include "difference_of_squares.h"

int square_of_sum(int n)
{
  // n(n + 1) / 2
  int sum = n * (n + 1) / 2;
  return sum * sum;
}

int sum_of_squares(int n)
{
  // n(n+1)(2n+1)/6
  return n * (n + 1) * (2 * n + 1) / 6;
}

int difference_of_squares(int n)
{
  return square_of_sum(n) - sum_of_squares(n); 
}
