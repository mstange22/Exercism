#include "pythagorean_triplet.h"
#include <stdlib.h>
#include <string.h>

triplets_t *triplets_with_sum(uint16_t sum) {
  size_t count = 0;
  triplet_t *triplets = malloc(sizeof(triplet_t*));
  if (!triplets) return NULL;

  for (size_t a = 1; a < sum / 3; a++) {
    for (size_t b = a + 1; b < sum - a - b; b++) {
      size_t c = sum - a - b;
      if (a * a + b * b == c * c) {
        count++;
        triplets = realloc(triplets, count * sizeof(triplet_t));
        triplets[count - 1] = (triplet_t){a, b, c};
      }
    }
  }
  triplets_t *res = (triplets_t*)malloc(sizeof(triplets_t) + count * sizeof(triplet_t));
  if (!res) return NULL;
  res->count = count;
  memcpy(res->triplets, triplets, count * sizeof(triplet_t));
  free(triplets);
  return res;
}

void free_triplets(triplets_t* triplets) {
  free(triplets);
}
