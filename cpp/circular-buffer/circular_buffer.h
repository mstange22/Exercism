#ifndef CIRCULAR_BUFFER_H
#define CIRCULAR_BUFFER_H
#include <vector>
#include <stdexcept>

namespace circular_buffer {
  template <class T> class circular_buffer {
    private:
      std::vector<T> buffer;
      unsigned long capacity;
      int oldest_index;
    
    public:
      circular_buffer(T buffer_capacity) : capacity(buffer_capacity), oldest_index(0) {}
      void write(T new_item) {
        if (buffer.size() != capacity) {
          buffer.push_back(new_item);
        }
      }
      T read() {
        if (buffer.size() == 0) {
          throw std::domain_error("error");
        } else {
          return buffer[oldest_index];
        }
      }
  };
}

#endif