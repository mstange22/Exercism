#ifndef TRIANGLE_H
#define TRIANGLE_H
#include <string>

namespace triangle {
  enum flavor { scalene, isosceles, equilateral, degenerate };
  flavor kind(double, double, double);
}

#endif