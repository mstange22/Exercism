#include "robot_name.h"

namespace robot_name {
  robot::robot() {
    reset();
  }

  string robot::name() const {
    return robot_name;
  }

  void robot::reset() {
    string new_name = "";
    for (int i = 1; i <= 5; i++) {
      if (i < 3) {
        // append a random uppercase letter
        new_name += char(rand() % 26 + 65);
      } else {
        // append a random number
        new_name += to_string(rand() % 9);
      }
    }
    // check to see if this name has already been stored
    if (find(name_list.begin(), name_list.end(), new_name) != name_list.end()) {
      reset();
    } else {
      robot_name = new_name;
      name_list.push_back(new_name);
    }
  }
}
