#include "square_root.h"

int squareRoot(int num) {
  for (int i = 1; i <= num / 2; i++) {
    if (i * i == num) {
      return i;
    }
  }
  return 1;
}
