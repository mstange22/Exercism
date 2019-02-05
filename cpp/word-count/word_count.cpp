#include "word_count.h"
#include <boost/algorithm/string.hpp>

std::map<std::string, int>word_count::words(std::string s) {
  std::map<std::string, int> word_map;
  std::string delimiters(",\n !&@$%^&:.");
  std::vector<std::string> tokens;
  boost::split(tokens, s, boost::is_any_of(delimiters));
  for (size_t i = 0; i < tokens.size(); i++) {
    if (tokens[i][0] == '\'') {
      tokens[i] = tokens[i].substr(1);
    }
    if (tokens[i][tokens[i].length()-1] == '\'') {
      tokens[i] = tokens[i].substr(0, tokens[i].length() - 1);
    }
    if (tokens[i] != "") {
      const std::string lower_str = boost::to_lower_copy(tokens[i]);
      if (word_map.find(lower_str) == word_map.end()) {
        word_map[lower_str] = 1;
      } else {
        word_map[lower_str]++;
      }
    }
  }
  return word_map;
}
