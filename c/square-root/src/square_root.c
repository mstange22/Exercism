#include "square_root.h"

int squareRoot(int num) {
  for (int i = 1; i * i <= num; i++) {
    if (i * i == num) {
      return i;
    }
  }
  return 1;
}
