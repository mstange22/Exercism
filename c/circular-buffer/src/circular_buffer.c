#include "circular_buffer.h"
#include <errno.h>
#include <stdio.h>

circular_buffer_t *new_circular_buffer(size_t capacity) {
  circular_buffer_t *new_buffer = (circular_buffer_t*)malloc(sizeof(circular_buffer_t));
  new_buffer->values = malloc(capacity * sizeof(buffer_value_t));
  new_buffer->capacity = capacity;
  new_buffer->size = 0;
  new_buffer->oldest_index = 0;
  return new_buffer;
}

int16_t read(circular_buffer_t *buffer, buffer_value_t *value) {
  if (buffer->size == 0) {
    errno = ENODATA;
    return 1;
  }
  *value = buffer->values[buffer->oldest_index];
  buffer->size--;
  buffer->oldest_index = (buffer->oldest_index + 1) % buffer->capacity;
  return 0;
}

int16_t write(circular_buffer_t *buffer, buffer_value_t value) {
  if (buffer->size == buffer->capacity) {
    errno = ENOBUFS;
    return 1;
  }
  buffer->values[(buffer->oldest_index + buffer->size) % buffer->capacity] = value;
  buffer->size++;
  return 0;
}

int16_t overwrite(circular_buffer_t *buffer, buffer_value_t value) {
  if (buffer->size < buffer->capacity) {
    return write(buffer, value);
  }
  buffer->values[buffer->oldest_index] = value;
  buffer->oldest_index = (buffer->oldest_index + 1) % buffer->capacity;
  return 0;
}

void clear_buffer(circular_buffer_t *buffer) {
  buffer->size = 0;
}

void delete_buffer(circular_buffer_t *buffer) {
  free(buffer->values);
  free(buffer);
}
