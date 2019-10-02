#include "pascals_triangle.h"

namespace pascals_triangle {
  std::vector<std::vector<int>> generate_rows(int rows) {
    std::vector<std::vector<int>> res;

    if (rows == 0) return res;
    res.push_back({ 1 });

    for (int i = 1; i < rows; i++) {
      std::vector<int> row;
      for (int j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          row.push_back(1);
        } else {
          row.push_back(res[i - 1][j - 1] + res[i - 1][j]);
        }
      }
      res.push_back(row);
    }
    return res;
  }
}
