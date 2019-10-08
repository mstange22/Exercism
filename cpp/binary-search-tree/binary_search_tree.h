#ifndef BINARY_SEARCH_TREE_H
# define BINARY_SEARCH_TREE_H

#include <vector>

namespace binary_tree {
  template <class T>
  class binary_tree {
    private:
      T tree_data;

    public:
      binary_tree();
      binary_tree(const T &data_iter);
      void insert(const T &data_iter);
      T& data();
      bool left();
      bool right();
  };
}

#endif
