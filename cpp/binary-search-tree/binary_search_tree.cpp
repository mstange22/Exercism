#include "binary_search_tree.h"

template<typename T>
binary_tree::binary_tree<T>::binary_tree() {

}

template<typename T>
binary_tree::binary_tree<T>::binary_tree(const T &data_iter) {
  tree_data = data_iter;
}

template<typename T>
T & binary_tree::binary_tree<T>::data() {
  return false;
}

template<typename T>
bool binary_tree::binary_tree<T>::left() {
  return false;
}

template<typename T>
bool binary_tree::binary_tree<T>::right() {
  return false;
}