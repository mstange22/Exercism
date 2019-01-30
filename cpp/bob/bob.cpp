#include "bob.h"
#include <boost/algorithm/string.hpp>
#include <cctype>

std::string bob::hey(std::string s) {
  boost::trim(s);
  
  if (s == "") {
    return "Fine. Be that way!";
  }
  
  if (bob::is_shouting(s)) {
    return "Whoa, chill out!";
  }

  if (s.back() == '?') {
    return "Sure.";
  }

  return "Whatever.";
}

bool bob::is_shouting(std::string s) {
  bool has_letter = false;
  for (size_t i = 0; i < s.length(); i++) {
    if (isupper(s[i])) {
      has_letter = true;
    }
    if (s[i] != toupper(s[i])) {
      return false;
    }
  }
  return has_letter;
}