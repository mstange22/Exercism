using System;
using System.Collections.Generic;
using System.Linq;

public enum SublistType
{
    Equal,
    Unequal,
    Superlist,
    Sublist
}

public static class Sublist
{
    public static SublistType Classify<T>(List<T> list1, List<T> list2)
        where T : IComparable
    {
        if (Sublist.IsEqual(list1, list2)) return SublistType.Equal;
        if (Sublist.IsSublist(list1, list2)) return SublistType.Sublist;
        if (Sublist.IsSublist(list2, list1)) return SublistType.Superlist;
        return SublistType.Unequal;
    }

    private static Boolean IsEqual<T>(List<T> list1, List<T> list2)
        where T : IComparable
    {
        if (list1.Count != list2.Count) return false;

        for (int i = 0; i < list1.Count; i++)
        {
            if (list1[i].CompareTo(list2[i]) != 0) return false;
        }
        return true;
    }

    private static Boolean IsSublist<T>(List<T> list1, List<T> list2)
        where T : IComparable
    {
        if (list1.Count == 0) return true;
        if (list1.Count > list2.Count) return false;

        var potentialList2StartIndexes = Enumerable.Range(0, list2.Count)
             .Where(i => list2[i].CompareTo(list1[0]) == 0)
             .ToList();
    
        foreach (var index in potentialList2StartIndexes)
        {
            if (Sublist.IsEqual(list1, list2.Skip(index).Take(list1.Count).ToList()))
            {
                return true;
            }
        }
        return false;
    }
}