#include "triangle.h"

bool is_valid_triangle(triangle_t sides)
{
  double a = sides.a;
  double b = sides.b;
  double c = sides.c;

  if (a == 0 || b == 0 || c == 0) {
    return false;
  }

  if (a <= c && b <= c) {
    return a + b > c;
  }
  if (b <= a && c <= a) {
    return b + c > a;
  }
  return a + c > b;
}

bool is_equilateral(triangle_t sides)
{
  return sides.a != 0 && sides.a == sides.b && sides.b == sides.c;
}

bool is_isosceles(triangle_t sides)
{
  return is_valid_triangle(sides) && (
    sides.a == sides.b || sides.a == sides.c || sides.b == sides.c
  );
}
bool is_scalene(triangle_t sides)
{
  return is_valid_triangle(sides) && (
    sides.a != sides.b && sides.a != sides.c && sides.b != sides.c
  );
}
