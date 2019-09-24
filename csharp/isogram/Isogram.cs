using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public static class Isogram
{
    public static bool IsIsogram(string word)
    {
        HashSet<char> letters = new HashSet<char>();
        string normalized = new Regex("[- ]").Replace(word, "").ToLower();
        foreach(char c in normalized) {
            if (letters.Contains(c)) {
                return false;
            }
            letters.Add(c);
        }
        return true;
    }
}
