#include "list_ops.h"
#include <string.h>

static list_value_t fold_length(list_value_t list_value, list_value_t accum) {
  return (list_value / list_value) + accum;
}

list_t *new_list(size_t length, list_value_t values[]) {
  list_t *res = (list_t*)malloc(sizeof(list_t));
  res->length = length;
  list_value_t *temp = (list_value_t*)malloc(length * sizeof(list_value_t));
  memcpy(temp, values, length * sizeof(list_value_t));
  memcpy(res->values, temp, length * sizeof(list_value_t));
  return res;
}

list_t *append_list(list_t * list1, list_t * list2) {
  size_t res_length = list1->length + list2->length;
  list_value_t *res_values = (list_value_t*)malloc(res_length * sizeof(list_value_t));
  size_t res_index = 0;
  for (size_t i = 0; i < list1->length; i++) {
    res_values[res_index++] = list1->values[i];
  }
  for (size_t i = 0; i < list2->length; i++) {
    res_values[res_index++] = list2->values[i];
  }
  return new_list(res_length, res_values);
}

list_t *filter_list(list_t * list, bool(*filter) (list_value_t value)) {
  size_t count = 0;
  for (size_t i = 0; i < list->length; i++) {
    if (filter(list->values[i])) {
      count++;
    }
  }
  list_value_t *res_values = (list_value_t*)malloc(count * sizeof(list_value_t));
  count = 0;
  for (size_t i = 0; i < list->length; i++) {
    if (filter(list->values[i])) {
      res_values[count++] = list->values[i];
    }
  }
  return new_list(count, res_values);
}

list_t *map_list(list_t * list, list_value_t(*map) (list_value_t value)) {
  list_value_t *res_values = (list_value_t*)malloc(list->length * sizeof(list_value_t));
  for (size_t i = 0; i < list->length; i++) {
    res_values[i] = map(list->values[i]);
  }
  return new_list(list->length, res_values);
}

list_value_t foldl_list(list_t * list, list_value_t initial,
                        list_value_t(*foldl) (list_value_t value,
                                              list_value_t initial)) {
  list_value_t accum = initial;
  for (size_t i = 0; i < list->length; i++) {
    accum = foldl(list->values[i], accum);
  }
  return accum;
}

list_value_t foldr_list(list_t * list, list_value_t initial,
                        list_value_t(*foldr) (list_value_t value,
                                              list_value_t initial)) {
  list_value_t accum = initial;
  for (size_t i = 0; i < list->length; i++) {
    accum = foldr(list->values[list->length - 1 - i], accum);
  }
  return accum;
}

size_t length_list(list_t * list) {
  return foldl_list(list, 0, fold_length);
}

list_t *reverse_list(list_t * list) {
  list_value_t *res_values = (list_value_t*)malloc(list->length * sizeof(list_value_t));
  for (size_t i = 0; i < list->length; i++) {
    res_values[i] = list->values[list->length - 1 - i];
  }
  return new_list(list->length, res_values);
}

void delete_list(list_t * list) {
  free(list);
}
