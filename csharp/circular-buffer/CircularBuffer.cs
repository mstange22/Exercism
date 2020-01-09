using System;
using System.Collections.Generic;

public class CircularBuffer<T>
{
    int capacity;
    Queue<T> buffer;

    public CircularBuffer(int capacity)
    {
        this.capacity = capacity;
        buffer = new Queue<T>();
    }

    public T Read()
    {
        if (buffer.Count == 0) {
            throw new InvalidOperationException("buffer is empty");
        }

        return buffer.Dequeue();
    }

    public void Write(T value)
    {
        if (buffer.Count == capacity) {
            throw new InvalidOperationException("buffer is full");
        }
        buffer.Enqueue(value);
    }

    public void Overwrite(T value)
    {
        if (buffer.Count == capacity) {
            buffer.Dequeue();
        }
        Write(value);
    }

    public void Clear()
    {
        buffer.Clear();
    }
}