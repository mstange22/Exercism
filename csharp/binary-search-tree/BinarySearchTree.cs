using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class BinarySearchTree : IEnumerable<int>
{
    int value;
    BinarySearchTree left;
    BinarySearchTree right;

    public BinarySearchTree(int value)
    {
        this.value = value;
    }

    public BinarySearchTree(IEnumerable<int> values)
    {

        if (values.Count() > 0)
        {
            this.value = values.First();

            for (int i = 1; i < values.Count(); i++)
            {
                Add(values.ElementAt(i));
            }
        }
    }

    public int Value
    {
        get
        {
            return value;
        }
    }

    public BinarySearchTree Left
    {
        get
        {
            return left;
        }
    }

    public BinarySearchTree Right
    {
        get
        {
            return right;
        }
    }

    public BinarySearchTree Add(int value)
    {
        if (value <= this.value)
        {
            if (left != null)
            {
                return left.Add(value);
            }
            left = new BinarySearchTree(value);
        }
        else
        {
            if (right != null)
            {
                return right.Add(value);
            }
            right = new BinarySearchTree(value);
        }
        return this;
    }

    public IEnumerator<int> GetEnumerator()
    {
        foreach (var elem in Left ?? Enumerable.Empty<int>())
        {
            yield return elem;
        }

        yield return value;

        foreach (var elem in Right ?? Enumerable.Empty<int>())
        {
            yield return elem;
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}