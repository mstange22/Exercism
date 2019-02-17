#include "pangram.h"

bool pangram::is_pangram(const std::string s) {
  std::string alpha = "abcdefghijklmnopqrstuvwxyz";
  for (int i = 0; i < 26; i++) {
    if (s.find(alpha[i]) == std::string::npos && s.find(toupper(alpha[i])) == std::string::npos) {
      return false;
    }
  }
  return true;
}