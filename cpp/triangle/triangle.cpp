#include "triangle.h"
#include <stdexcept>

using namespace std;

triangle::flavor triangle::kind(double a, double b, double c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    throw domain_error("triangles with no size are illegal");
  }
  if (a + b < c || a + c < b || b + c < a) {
    throw domain_error("triangle inequality violation");
  }
  if (a + b == c || a + c == b || b + c == a) {
    return triangle::flavor::degenerate;
  }
  if (a == b && b == c) {
    return triangle::flavor::equilateral;
  }
  if (a == b || a == c || b == c) {
    return triangle::flavor::isosceles;
  }
  return triangle::flavor::scalene;
}