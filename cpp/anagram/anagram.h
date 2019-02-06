#ifndef ANAGRAM_H
#define ANAGRAM_H

#include <vector>
#include <string>

namespace anagram {
  class anagram {
    std::string main_s;
    public:
      anagram(std::string);
      std::vector<std::string> matches(std::vector<std::string>);
      bool is_anagram(std::string s);
  };
}

#endif