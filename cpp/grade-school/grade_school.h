#if !defined(GRADE_SCHOOL_H)
#define GRADE_SCHOOL_H

#include <map>
#include <string>
#include <vector>

using namespace std;

namespace grade_school {
  class school {
    map<int, vector<string>> r;
    public:
      map<int, vector<string>> roster() {
      for (map<int, vector<string>>::iterator i = r.begin(); i != r.end(); i++)
        sort(i -> second.begin(), i -> second.end());
        return r;
      }
      void add(string name, int grade) {
        if (r.count(grade) == 1) {
          r[grade].push_back(name);
        } else {
          vector<string> v = { name };
          r.insert(pair<int, vector<string>>(grade, { name }));
        }
      }
      vector<string> grade(int grade) {
        vector<string> temp;
        if (r.count(grade) == 1) {
           temp = r[grade];
          sort(temp.begin(), temp.end());
          return temp;
        } else {
          return temp;
        }
      }
  };
}

#endif