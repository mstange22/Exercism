#include "secret_handshake.h"
#include <algorithm>
#include <cmath>

namespace secret_handshake {
  vector<string> commands(int n) {
    vector<string> res;
    vector<string> command_list = {
      "wink", "double blink", "close your eyes", "jump"
    };

    for (size_t i = 0; i < command_list.size(); i++) {
      if (n & (int)pow(2, i)) {
        res.push_back(command_list[i]);
      }
    }

    if (n & 16) {
      reverse(res.begin(), res.end());
    }

    return res;
  }
}
