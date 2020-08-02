#include "pythagorean_triplet.h"
#include <stdlib.h>
#include <string.h>

triplets_t *triplets_with_sum(uint16_t sum) {
  triplets_t *res = (triplets_t*)malloc(sizeof(triplets_t));
  if (!res) return res;

  size_t count = 0;

  for (size_t a = 1; a < sum / 3; a++) {
    for (size_t b = a + 1; b < sum - a - b; b++) {
      size_t c = sum - a - b;
      if (a * a + b * b == c * c) {
        count++;
        res = (triplets_t*)realloc(res, sizeof(triplets_t) + count * sizeof(triplet_t));
        if (!res) return res;
        memcpy(&(res->triplets[count - 1]), &(triplet_t){a, b, c}, sizeof(triplet_t));
      }
    }
  }
  res->count = count;
  return res;
}

void free_triplets(triplets_t* triplets) {
  free(triplets);
}
