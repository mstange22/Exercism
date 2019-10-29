using System;
using System.Collections.Generic;
using System.Linq;

public static class ListOps
{
    public static int Length<T>(List<T> input)
    {
        var res = 0;
        foreach (var _ in input) {
            res++;
        }
        return res;
    }

    public static List<T> Reverse<T>(List<T> input)
    {
        var inputLength = ListOps.Length(input);
        var res = new List<T>();
        for (int i = inputLength - 1; i >= 0; i--) {
            res = ListOps.Append(res, new List<T>(){ input[i] });
        }
        return res;
    }

    public static List<TOut> Map<TIn, TOut>(List<TIn> input, Func<TIn, TOut> map)
    {
        var res = new List<TOut>();
        for (int i = 0; i < ListOps.Length(input); i++) {
            res = ListOps.Append(res, new List<TOut>(){ map(input[i]) });
        }
        return res;
    }

    public static List<T> Filter<T>(List<T> input, Func<T, bool> predicate)
    {
        var inputLength = ListOps.Length(input);
        var res = new List<T>();
        for (int i = 0; i < ListOps.Length(input); i++) {
            if (predicate(input[i])) {
                res = ListOps.Append(res, new List<T>(){ input[i] });
            }
        }
        return res;
    }

    public static TOut Foldl<TIn, TOut>(List<TIn> input, TOut start, Func<TOut, TIn, TOut> func)
    {
        TOut res = start;
        for (int i = 0; i < ListOps.Length(input); i++) {
            res = func(res, input[i]);
        }
        return res;
    }

    public static TOut Foldr<TIn, TOut>(List<TIn> input, TOut start, Func<TIn, TOut, TOut> func)
    {
        TOut res = start;
        for (int i = ListOps.Length(input) - 1; i >= 0; i--) {
            res = func(input[i], res);
        }
        return res;
    }

    public static List<T> Concat<T>(List<List<T>> input)
    {
        var res = new List<T>();
        foreach (var list in input) {
            res = ListOps.Append(res, list);
        }
        return res;
    }

    public static List<T> Append<T>(List<T> left, List<T> right)
    {
        var leftLength = ListOps.Length(left);
        var rightLength = ListOps.Length(right);
        var res = new T[leftLength + rightLength];
        
        for (int i = 0; i < leftLength; i++) {
            res[i] = left[i];
        }
        
        for (int i = leftLength; i < leftLength + rightLength; i++) {
            res[i] = right[i - leftLength];
        }
        return res.ToList();
    }
}