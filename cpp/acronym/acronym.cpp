#include "acronym.h"
#include <sstream>

string acronym::acronym(string s) {
  string res;
  string token;
  stringstream ss(s);
  while (ss >> token) {
    res += toupper(token[0]);
    // check token for dash
    for (size_t i = 0; i < token.length(); i++) {
      if (token[i] == '-' && token[i+1]) {
        res += toupper(token[i+1]);
      }
    }
  }
  return res;
}