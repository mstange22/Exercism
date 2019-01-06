#if !defined(RNA_TRANSCRIPTION_H)
#define RNA_TRANSCRIPTION_H
#include <string>
using namespace std;

namespace transcription {
  char getChar(char c) {
    char res;
    if (c== 'G') {
      res = 'C';
    } else if (c == 'C') {
      res = 'G';
    } else if (c == 'T') {
      res = 'A';
    } else if (c == 'A') {
      res = 'U';
    } else {
      throw invalid_argument("invalid argument");
    }
    return res;
  }
  char to_rna(char c) {
    return getChar(c);
  }
  string to_rna(string s) {
    string res = "";
    for (size_t i = 0; i < s.length(); i++) {
      res += getChar(s[i]);
    }
    return res;
  }
}

#endif