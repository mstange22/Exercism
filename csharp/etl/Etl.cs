using System;
using System.Collections.Generic;

public static class Etl
{
    public static Dictionary<string, int> Transform(Dictionary<int, string[]> old)
    {
        var res = new Dictionary<string, int>();

        foreach (KeyValuePair<int, string[]> entry in old) {
            foreach (string s in entry.Value) {
                res.Add(s.ToLower(), entry.Key);
            }
        }
        return res;
    }
}