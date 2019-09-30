using System;
using System.Collections.Generic;
using System.Linq;

public static class ParallelLetterFrequency
{
    public static Dictionary<char, int> Calculate(IEnumerable<string> texts)
    {
        var groups = texts
            .AsParallel()
            .SelectMany(text => text
                .ToLower()
                .Where(Char.IsLetter)
                .GroupBy(letter => letter)
            );

        var res = new Dictionary<char, int>();

        foreach (var group in groups) {
            if (!res.ContainsKey(group.Key)) {
                res[group.Key] = group.Count();
            } else {
                res[group.Key] += group.Count();
            }
        }
        return res;
    }
}