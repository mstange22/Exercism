using System;
using System.Collections.Generic;

public class CircularBuffer<T>
{
    int capacity;
    int size;
    int oldestIndex;
    List<T> buffer;

    public CircularBuffer(int capacity)
    {
        this.capacity = capacity;
        buffer = new List<T>();
        size = 0;
        oldestIndex = 0;
    }

    public T Read()
    {
        if (size == 0) {
            throw new InvalidOperationException("buffer is empty");
        }

        T res = buffer[oldestIndex];
        size--;
        oldestIndex = (oldestIndex + 1) % buffer.Count;
        return res;
    }

    public void Write(T value)
    {
        if (size == capacity) {
            throw new InvalidOperationException("buffer is full");
        }
        if (buffer.Count != capacity) {
            buffer.Add(value);
        } else {
            buffer[(oldestIndex + size) % buffer.Count] = value;
        }
        size++;
    }

    public void Overwrite(T value)
    {
        if (size < capacity) {
            Write(value);
        } else {
            buffer[oldestIndex] = value;
            oldestIndex = (oldestIndex + 1) % buffer.Count;
        }
    }

    public void Clear()
    {
        size = 0;
        oldestIndex = 0;
        buffer = new List<T>();
    }
}