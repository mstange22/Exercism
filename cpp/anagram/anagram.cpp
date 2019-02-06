#include "anagram.h"
#include <boost/algorithm/string.hpp>

namespace anagram {
  anagram::anagram(std::string s) {
    main_s = boost::to_lower_copy(s);
  }

  std::vector<std::string> anagram::matches(std::vector<std::string> candidates) {
    std::vector<std::string> res;
    for (size_t i = 0; i < candidates.size(); i++) {
      if (is_anagram(boost::to_lower_copy(candidates[i]))) {
        res.push_back(candidates[i]);
      }
    }
    return res;
  }

  bool anagram::is_anagram(std::string s) {
    if (s.length() != main_s.length() || s == main_s) {
      return false;
    }

    std::string temp_main = main_s;
    std::sort(temp_main.begin(), temp_main.end());
    std::sort(s.begin(), s.end());
    return temp_main == s;
  }
}