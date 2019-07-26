#include "linked_list.h"
#include <stdlib.h>

list_item **new_list() {
  list_item *list = malloc(sizeof(list_item));
  if (!list) return NULL;

  list->head = NULL;
  list->tail = NULL;

  list_item **res = malloc(sizeof(list_item*));
  if (!res) return NULL;

  *res = list;
  return res;
}

bool is_list_empty(list_item **list) {
  return !list || !*list || !(*list)->head;
}

bool push(list_item** list, ll_data_t data) {
  if (!list) return false;

  list_node *new_item = (list_node*)malloc(sizeof(list_node));
  if (!new_item) return false;

  new_item->data = data;
  new_item->next = NULL;
  new_item->prev = NULL;

  // pushing to empty list
  if (is_list_empty(list)) {
    (*list)->head = new_item;
    (*list)->tail = new_item;
  } else if ((*list)->head == (*list)->tail) { // one element
    new_item->prev = (*list)->head;
    (*list)->head->next = new_item;
    (*list)->tail = new_item;
  } else {
    new_item->prev = (*list)->tail;
    (*list)->tail->next = new_item;
    (*list)->tail = (*list)->tail->next;
  }
  return true;
}

size_t pop(list_item **list) {
  if (is_list_empty(list)) return 0;

  size_t res = (*list)->tail->data;

  // if only one node
  if ((*list)->head == (*list)->tail) {
    free((*list)->tail);
    (*list)->head = NULL;
    (*list)->tail = NULL; 
  } else {
    (*list)->tail->prev->next = NULL;
    list_node *temp = (*list)->tail;
    (*list)->tail = (*list)->tail->prev;
    free(temp);
  }
  return res;
}

bool unshift(list_item** list, ll_data_t data) {
  if (!list) return false;

  list_node *new_item = (list_node*)malloc(sizeof(list_node));
  if (!new_item) return false;

  new_item->data = data;
  new_item->next = NULL;
  new_item->prev = NULL;

  // unshifting to empty list
  if (is_list_empty(list)) {
    (*list)->head = new_item;
    (*list)->tail = new_item;
  } else if ((*list)->head == (*list)->tail) { // one element
    new_item->next = (*list)->tail;
    (*list)->tail->prev = new_item;
    (*list)->head = new_item;
  } else {
    new_item->next = (*list)->head;
    (*list)->head->prev = new_item;
    (*list)->head = (*list)->head->prev;
  }
  return true;
}

size_t shift(list_item **list) {
  if (is_list_empty(list)) return 0;
  
  size_t res = (*list)->head->data;

  // if only one node
  if ((*list)->head == (*list)->tail) {
    free((*list)->head);
    (*list)->head = NULL;
    (*list)->tail = NULL; 
  } else {
    (*list)->head->next->prev = NULL;
    list_node *temp = (*list)->head;
    (*list)->head = (*list)->head->next;
    free(temp);
  }
  return res;
}

void delete_list(list_item **list) {
  while (!is_list_empty(list)) {
    pop(list);
  }
  free(list);
}
