using System;
using System.Collections.Generic;
using System.Linq;

public static class Proverb
{
    public static string[] Recite(string[] subjects)
    {
        var res = new List<string>();

        if (subjects.Length > 0) {
            for (int i = subjects.Length - 1; i >= 0; i--) {
                if (i > 0) {
                    res.Insert(0, $"For want of a {subjects[i - 1]} the {subjects[i]} was lost.");
                } else {
                    res.Add($"And all for the want of a {subjects[i]}.");
                }
            }
        }
        return res.ToArray();
    }
}