#if !defined(HAMMING_H)
#define HAMMING_H
#include <stdexcept>
#include <string>

namespace hamming {
  int compute(std::string a, std::string b) {
    int count = 0;
    if (a.length() != b.length()) {
  	  throw std::domain_error("length of strings must be equal");
    }
    for (size_t i = 0; i < a.length(); i++) {
      if (a[i] != b[i]) {
        count++;
      }
    }
    return count;
  }
}

#endif
