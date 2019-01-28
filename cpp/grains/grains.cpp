#include "grains.h"

unsigned long long grains::square(int n) {
  return 1ULL << (n - 1);
}

// without being able to shift an unsigned long long 64 bits left from 1,
// I shifted it 63 and then doubled the result for the same effect.
uint_fast64_t grains::total() {
  return (1ULL << 63) * 2 - 1;
}