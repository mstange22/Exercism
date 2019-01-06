#if !defined(NUCLEOTIDE_H)
#define NUCLEOTIDE_H
#include <map>
#include <string>

using namespace std;

namespace dna {
  class counter {
    private:
      map<char, int> counts { {'A', 0}, {'T', 0}, {'C', 0}, {'G', 0} };
      string s;
      void validateChar(char a) const {
        if (a != 'A' && a != 'T' & a != 'C' && a != 'G') {
          throw invalid_argument("invalid input");
        }
      }

    public:
      counter(string initString) {
        for (size_t i = 0; i < initString.length(); i++) {
          validateChar(initString[i]);
          counts[initString[i]]++;
        }
        s = initString;
      }
      map<char, int> nucleotide_counts() const {
        return counts;
      }
      int count(char a) const {
        int count = 0;
        validateChar(a);
        for (size_t i = 0; i < s.length(); i++) {
          if (s[i] == a) {
            count++;
          }
        }
        return count;
      }
  };
}

#endif