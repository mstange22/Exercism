#include "atbash_cipher.h"

using namespace std;

string atbash::encode(string s) {
  string res = "";
  int num_chars = 0;
  for (size_t i = 0; i < s.length(); i++) {
    char prev_char = tolower(s[i]);
    if ((prev_char >= 'a' && prev_char <= 'z') || (prev_char >= '0' && prev_char <= '9')) {
      if (num_chars != 0 && num_chars % 5 == 0) {
        res += ' ';
      }
      num_chars++;
      if (prev_char >= '0' && prev_char <= '9') {
        res += prev_char;
      } else {
        res += char('z' - (prev_char - 'a'));
      }
    }
  }
  return res;
}

string atbash::decode(string s) {
  string res = "";
  for (size_t i = 0; i < s.length(); i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
        res += char('z' - (s[i] - 'a'));
    } else if (s[i] >= '0' && s[i] <= '9') {
        res += s[i];
    }
  }
  return res;
}