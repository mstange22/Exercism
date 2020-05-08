#include "square_root.h"

int squareRoot(int num) {
  float res = 100;
  while (res * res != num) {
    res = (res + ((float)num / res)) / 2;
  }
  return (int)res;
}
