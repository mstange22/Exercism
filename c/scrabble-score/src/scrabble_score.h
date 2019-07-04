#ifndef SCRABBLE_SCORE_H
#define SCRABBLE_SCORE_H

typedef struct {
  char *letters;
  int value;
} letter_map;

int score(char *word);

#endif
