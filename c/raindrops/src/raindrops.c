#include "raindrops.h"
#include <string.h>
#include <stdio.h>

#define LENGTH 3

typedef struct {
  int number;
  char *noise;
} rain;

rain raindrops[3] = {
  { 3, "Pling" },
  { 5, "Plang" },
  { 7, "Plong" },
};

void convert(char *result, int drops) {
  for (int i = 0; i < LENGTH; i++) {
    if (drops % raindrops[i].number == 0) {
      strcat(result, raindrops[i].noise);
    }
  }
  if (strlen(result) == 0) {
    sprintf(result, "%d", drops);
  }
}
