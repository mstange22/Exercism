using System;
using System.Text;
using System.Collections.Generic;

public static class RomanNumeralExtension
{
    static List<(string, int)> map = new List<(string, int)>(){
        ("M", 1000), ("CM", 900), ("D", 500), ("CD", 400),
        ("C", 100), ("XC", 90), ("L", 50), ("XL", 40),
        ("X", 10), ("IX", 9), ("V", 5), ("IV", 4), ("I", 1),
    };

    public static string ToRoman(this int value)
    {
        StringBuilder s = new StringBuilder();

        foreach(var entry in map) {
            while (value >= entry.Item2) {
                s.Append(entry.Item1);
                value -= entry.Item2;
            }
        }

        return s.ToString();
    }
}