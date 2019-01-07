#ifndef ALLERGIES_H
#define ALLERGIES_H
#include <string>
#include <map>
#include <unordered_set>

namespace allergies {
  class allergy_test {
    int bits;
    std::map<std::string, int> bit_map = {
      { "eggs", 1 },
      { "peanuts", 2 }, 
      { "shellfish", 4 },
      { "strawberries", 8 },
      { "tomatoes", 16 },
      { "chocolate", 32 },
      { "pollen", 64 },
      { "cats", 128 },
    };
    public:
      allergy_test(int);
      bool is_allergic_to(std::string);
      std::unordered_set<std::string> get_allergies();
  };
}

#endif