#include "binary_search_tree.h"
#include <stdlib.h>
#include <stdio.h>

#define MAX_SIZE (256 * sizeof(int))

node_t *get_new_node(int data)
{
  node_t *new_node = malloc(sizeof(node_t));
  new_node->data = data;
  new_node->left = NULL;
  new_node->right = NULL;
  return new_node;
}

void insert(node_t *tree, int data)
{
  if (data <= tree->data)
  {
    if (!tree->left)
    {
      tree->left = get_new_node(data);
    }
    else
    {
      insert(tree->left, data);
    }
  }
  else if (!tree->right)
  {
    tree->right = get_new_node(data);
  }
  else
  {
    insert(tree->right, data);
  }
}

node_t *build_tree(int tree_data[], int n)
{
  if (n == 0) return NULL;

  node_t *tree = get_new_node(tree_data[0]);
  for (int i = 1; i < n; i++)
  {
    insert(tree, tree_data[i]);
  }
  return tree;
}

void inorder_traversal(node_t *tree, int **sorted_data)
{
  if (tree)
  {
    inorder_traversal(tree->left, sorted_data);
    **sorted_data = tree->data;
    (*sorted_data)++;
    inorder_traversal(tree->right, sorted_data);
  }
}

int *sorted_data(node_t *tree)
{
  int *sorted_data_pointer = malloc(MAX_SIZE);
  int *res = sorted_data_pointer;
  inorder_traversal(tree, &sorted_data_pointer);
  return res;
}

void free_tree(node_t *tree)
{
  if (tree)
  {
    free_tree(tree->left);
    free_tree(tree->right);
    free(tree);
  }
}
