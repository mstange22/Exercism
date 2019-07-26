#ifndef LINKED_LIST_H
#define LINKED_LIST_H
#include <stddef.h>
#include <stdbool.h>

typedef int ll_data_t;

typedef struct list_node {
  ll_data_t data;
  struct list_node *next;
  struct list_node *prev;
} list_node;

typedef struct list_item {
  list_node *head;
  list_node *tail;
} list_item;

list_item **new_list();
bool is_list_empty(list_item** list);
bool push(list_item** list, ll_data_t data);
size_t pop(list_item **list);
bool unshift(list_item** list, ll_data_t data);
size_t shift(list_item **list);
void delete_list(list_item** list);

#endif
