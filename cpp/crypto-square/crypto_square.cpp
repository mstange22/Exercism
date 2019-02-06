#include "crypto_square.h"
#include <boost/algorithm/string.hpp>
#include <ctype.h>
#include <math.h>

crypto_square::cipher::cipher(std::string s) {
  phrase = s;
}

std::string crypto_square::cipher::normalize_plain_text() {
  std::string normalized = "";
  for (size_t i = 0; i < phrase.length(); i++) {
    if (isalnum(phrase[i])) {
      normalized += phrase[i];
    }
  }
  return boost::to_lower_copy(normalized);
}

std::vector<std::string> crypto_square::cipher::plain_text_segments() {
  std::vector<std::string> plain_text;
  std::string normalized_text = normalize_plain_text();
  c = ceil(sqrt(normalized_text.length()));
  r = floor(sqrt(normalized_text.length()));

  for (size_t i = 0; i < r; i++) {
    std::string temp = "";
    for (size_t j = 0; j < c; j++) {
      if (c*i+j < normalized_text.length()) {
        temp += normalized_text[(c * i) + j];
      }
    }
    plain_text.push_back(temp);
  }
  return plain_text;
}

std::string crypto_square::cipher::cipher_text() {
  std::vector<std::string> segments = plain_text_segments();
  std::string encoded_text = "";
  if (segments.size() == 0) return encoded_text;
  for (size_t i = 0; i < segments[0].size(); i++) {
    for (size_t j = 0; j < segments.size(); j++) {
      if (i < segments[j].size()) {
        encoded_text += segments[j][i];
      }
    }
  }
  return encoded_text;
}

std::string crypto_square::cipher::normalized_cipher_text() {
  std::vector<std::string> segments = plain_text_segments();
  std::string normalized_encoded_text = "";
  if (segments.size() == 0) return normalized_encoded_text;

  for (size_t i = 0; i < c; i++) {
    for (size_t j = 0; j < r; j++) {
      if (i < segments[j].size()) {
        normalized_encoded_text += segments[j][i];
      } else {
        normalized_encoded_text += ' ';
      }
    }
    if (i < c - 1) {
      normalized_encoded_text += ' ';
    }
  }
  return normalized_encoded_text;
}