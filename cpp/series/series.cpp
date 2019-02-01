#include "series.h"

std::vector<int> series::digits(std::string s) {
  std::vector<int> v;
  for (size_t i = 0; i < s.length(); i++) {
    v.push_back((int)(s[i] - '0'));
  }
  return v;
}

std::vector<std::vector<int>> series::slice(std::string s, int n) {
  if ((int)s.length() < n) {
    throw std::domain_error("Slices cannot be longer than the original string.");
  }
  std::vector<std::vector<int>> v;
  for (size_t i = 0; i < s.length() - n + 1; i++) {
    v.push_back(series::digits(s.substr(i, n)));
  }
  return v;
}