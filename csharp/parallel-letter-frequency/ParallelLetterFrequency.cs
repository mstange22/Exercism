using System;
using System.Collections.Generic;
using System.Linq;

public static class ParallelLetterFrequency
{
    public static Dictionary<char, int> Calculate(IEnumerable<string> texts)
    {
        var queryResult = texts
            .AsParallel()
            .SelectMany(text => text
                .ToLower()
                .Where(char.IsLetter)
                .GroupBy(letter => letter)
            );

        var res = new Dictionary<char, int>();

        foreach (var letter in queryResult) {
            if (!res.ContainsKey(letter.Key)) {
                res[letter.Key] = letter.Count();
            } else {
                res[letter.Key] += letter.Count();
            }
        }
        return res;
    }
}