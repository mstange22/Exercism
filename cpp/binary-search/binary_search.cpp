#include "binary_search.h"
#include <stdexcept>

size_t binary_search::find(const std::vector<int> data, int target) {
  int min = 0;
  int max = data.size() - 1;
  while (min < max) {
    int mid = (min + max) / 2;
    if (target == data[mid]) {
      return mid;
    }
    if (target < data[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  if (data.size() == 0 || data[min] != target) {
    throw std::domain_error("not found");
  }
  return min;
}
