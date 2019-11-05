#include "darts.h"
#include <math.h>

int score(coordinate_t pos)
{
  float distance = sqrt(pos.x * pos.x + pos.y * pos.y);
  if (distance > 10) return 0;
  if (distance > 5) return 1;
  if (distance > 1) return 5;
  return 10;
}
