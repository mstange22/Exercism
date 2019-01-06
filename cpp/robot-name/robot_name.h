#ifndef ROBOT_NAME_H
#define ROBOT_NAME_H
#include <string>
#include <vector>

using namespace std;

namespace robot_name {
  class robot {
    vector<string> name_list;
    string robot_name;
    public:
      robot();
      string name() const;
      void reset();
  };
}

#endif