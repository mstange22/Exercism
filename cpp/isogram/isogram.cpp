#include "isogram.h"
#include <map>

bool isogram::is_isogram(std::string s) {
  std::map<char, bool> chars_seen;
  for (size_t i = 0; i < s.length(); i++) {
    char c = tolower(s[i]);
    if (isalpha(c)) {
      if (chars_seen.find(c) != chars_seen.end()) {
        return false;
      }
      chars_seen[c] = true;
    }
  }
  return true;
}