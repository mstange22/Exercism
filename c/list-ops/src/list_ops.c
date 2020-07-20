#include "list_ops.h"
#include <string.h>

list_t *new_list(size_t length, list_value_t values[]) {
  list_t *res = (list_t*)malloc(sizeof(list_t) + length * sizeof(list_value_t));
  res->length = length;
  memcpy(res->values, values, length * sizeof(list_value_t));
  return res;
}

list_t *append_list(list_t * list1, list_t * list2) {
  size_t res_length = list1->length + list2->length;
  list_t *res_list = (list_t*)malloc(sizeof(list_t) + res_length * sizeof(list_value_t));
  res_list->length = res_length;
  memcpy(res_list->values, list1->values, list1->length * sizeof(list_value_t));
  memcpy(&res_list->values[list1->length], list2->values, list2->length * sizeof(list_value_t));
  return res_list;
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
  list_t *filtered_list = new_list(count, res_values);
  free(res_values);
  return filtered_list;
}

list_t *map_list(list_t *list, list_value_t(*map) (list_value_t value)) {
  list_value_t *res_values = (list_value_t*)malloc(list->length * sizeof(list_value_t));
  for (size_t i = 0; i < list->length; i++) {
    res_values[i] = map(list->values[i]);
  }
  list_t *mapped_list = new_list(list->length, res_values);
  free(res_values);
  return mapped_list;
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

list_value_t foldr_list(list_t *list, list_value_t initial,
                        list_value_t(*foldr) (list_value_t value,
                                              list_value_t initial)) {
  list_value_t accum = initial;
  for (size_t i = 0; i < list->length; i++) {
    accum = foldr(list->values[list->length - 1 - i], accum);
  }
  return accum;
}

size_t length_list(list_t * list) {
  return list->length;
}

list_t *reverse_list(list_t * list) {
  list_value_t *res_values = (list_value_t*)malloc(list->length * sizeof(list_value_t));
  for (size_t i = 0; i < list->length; i++) {
    res_values[i] = list->values[list->length - 1 - i];
  }
  list_t *reversed_list = new_list(list->length, res_values);
  free(res_values);
  return reversed_list;
}

void delete_list(list_t * list) {
  free(list);
}
