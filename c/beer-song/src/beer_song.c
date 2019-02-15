#include "beer_song.h"
#include <stdio.h>
#include <string.h>

#define BUFFER_SIZE 128

void verse(char *res, int n) {
  char res2[BUFFER_SIZE];
  if (n == 0)
  {
    sprintf(res, "No more bottles of beer on the wall, no more bottles of beer.\n");
    sprintf(res2, "Go to the store and buy some more");
  }
  else
  {
    sprintf(res, "%i bottle%s of beer on the wall, %i bottle%s of beer.\n", n, n == 1 ? "" : "s", n, n == 1 ? "" : "s");
    sprintf(res2, "Take %s down and pass it around", n == 1 ? "it" : "one");
  }
  strcat(res, res2);
  char res3[BUFFER_SIZE];
  if (n == 1)
  {
    sprintf(res3, ", no more bottles of beer on the wall.\n");
  }
  else {
    sprintf(res3, ", %i %s of beer on the wall.\n", n == 0 ? 99 : n-1, n == 2 ? "bottle" : "bottles");
  }
  strcat(res, res3);
}
    

void sing(char * res, int start, int end) {
  res[0] = 0;
  for (int i = start; i >= end; i--)
  {
    char res2[BUFFER_SIZE] = {0};
    verse(res2, i);
    if (i != end)
    {
      strcat(res2, "\n");
    }
    strcat(res, res2);
  }
}
