#include "sublist.h"
#include "stdbool.h"

bool is_equal(int *l2, int *l1, size_t l2_length) {
  for (size_t i = 0; i < l2_length; i++) {
    if (l2[i] != l1[i]) {
      return false;
    }
  }
  return true;
}

bool is_sublist(int *test_list, int *base_list, size_t test_length, size_t base_length) {
  if (test_length > base_length) {
    return false;
  }

  if (test_length == 0) {
    return true;
  }

  for (size_t i = 0; i < base_length - test_length + 1; i++) {
    if (base_list[i] == test_list[0]) {
      if (is_equal(test_list, &base_list[i], test_length)) {
        return true;
      }
    }
  }
  return false;
}

comparison_result_t check_lists(int *l2, int *l1, size_t l2_length, size_t l1_length) {
  if (l2_length == l1_length && is_equal(l2, l1, l2_length)) {
    return EQUAL;
  }
  if (is_sublist(l2, l1, l2_length, l1_length)) {
    return SUBLIST;
  }
  if (is_sublist(l1, l2, l1_length, l2_length)) {
    return SUPERLIST;
  }
  return UNEQUAL;             
}
