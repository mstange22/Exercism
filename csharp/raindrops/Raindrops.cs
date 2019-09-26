using System;
using System.Collections.Generic;
using System.Text;

public static class Raindrops
{
    private static Dictionary<int, string> map = new Dictionary<int, string>(){
        { 3, "Pling" },
        { 5, "Plang" },
        { 7, "Plong" },
    };
    public static string Convert(int number)
    {
        StringBuilder s = new StringBuilder();
        foreach(KeyValuePair<int, string> entry in map) {
            if (number % entry.Key == 0) {
                s.Append(entry.Value);
            }
        }
        return s.Length == 0 ? number.ToString() : s.ToString();
    }
}