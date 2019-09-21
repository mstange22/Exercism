using System;
using System.Collections.Generic;
using System.Text;

public static class RnaTranscription
{
    private static Dictionary<char, char> map = new Dictionary<char, char> {
       { 'G', 'C' },
       { 'C', 'G' },
       { 'T', 'A' },
       { 'A', 'U' },
    };
    public static string ToRna(string nucleotide)
    {
        StringBuilder res = new StringBuilder(); 
        foreach (char c in nucleotide) {
            if (map.ContainsKey(c)) {
                res.Append(map[c]);
            }
        }
        return res.ToString();
    }
}