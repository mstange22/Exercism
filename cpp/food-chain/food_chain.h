#ifndef FOOD_CHAIN_H
#define FOOD_CHAIN_H

#define FLY 1
#define SPIDER 2
#define HORSE 8

#include <string>

typedef struct {
  std::string animal;
  std::string reaction;
} VERSE_INFO;

namespace food_chain {
  std::string verse(int);
  std::string verses(int, int);
  std::string sing();
}

#endif