#ifndef BINARY_SEARCH_TREE_H
#define BINARY_SEARCH_TREE_H

typedef struct node {
  int data;
  struct node *left;
  struct node *right;
} node_t;

node_t *build_tree(int[], int);
node_t *get_new_node(int);
void insert(node_t *, int);
void free_tree(node_t *);
int *sorted_data(node_t *);
void inorder_traversal(node_t*, int**);

#endif
