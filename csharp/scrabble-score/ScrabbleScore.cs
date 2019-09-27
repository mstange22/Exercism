using System;
using System.Collections.Generic;

public static class ScrabbleScore
{
    public static int Score(string input)
    {
        int score = 0;
        // given points-to-letters mapping
        Dictionary<int, string> givenMap = new Dictionary<int, string>(){
            { 1, "AEIOULNRST"},
            { 2, "DG" },
            { 3, "BCMP" },
            { 4, "FHVWY" },
            { 5, "K" },
            { 8, "JX" },
            { 10, "QZ" },
        };
        // build one-to-one letter-to-points map programmatically
        Dictionary<char, int> oneToOneMap = new Dictionary<char, int>();
        foreach (KeyValuePair<int, string> entry in givenMap) {
            foreach (char c in entry.Value) {
                oneToOneMap.Add(c, entry.Key);
            }
        }
        // look up score in constant time
        foreach (char c in input.ToUpper()) {
            score += oneToOneMap[c];
        }
        return score;
    }
}