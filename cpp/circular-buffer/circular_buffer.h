#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H
#include <vector>
#include <stdexcept>
#include <stdio.h>

namespace circular_buffer {
  template <class T> class circular_buffer {
    private:
      std::vector<T> buffer;
      unsigned long capacity;
      int oldest_index;
      unsigned long num_elements;
    
    public:
      circular_buffer(unsigned long buffer_capacity) : capacity(buffer_capacity), oldest_index(0), num_elements(0) {}

      void write(T new_item) {
        if (num_elements == capacity) {
          throw std::domain_error("error");
        }
        if (buffer.size() < capacity) {
          buffer.push_back(new_item);
        } else {
          buffer[(oldest_index + num_elements) % capacity] = new_item;
        }
        num_elements++;
      }

      void overwrite(T new_item) {
        if (num_elements != capacity) {
          write(new_item);
        } else {
          buffer[oldest_index] = new_item;
          oldest_index = (oldest_index + 1) % capacity;
        }
      }

      T read() {
        if (num_elements == 0) {
          throw std::domain_error("error");
        } else {
          num_elements--;
          T res = buffer[oldest_index];
          oldest_index = (oldest_index + 1) % capacity;
          return res;
        }
      }

      void clear() {
        num_elements = 0;
        oldest_index = 0;
      }
  };
}

#endif