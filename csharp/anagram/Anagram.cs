using System;
using System.Collections.Generic;

public class Anagram
{
    private string baseWord;
    public Anagram(string baseWord)
    {
        this.baseWord = baseWord;
    }

    public string[] FindAnagrams(string[] potentialMatches)
    {
        var matches = new List<string>();
        foreach (var candidate in potentialMatches) {
            if (isAnagram(candidate.ToLower())) {
                matches.Add(candidate);
            }
        }
        return matches.ToArray();
    }

    private bool isAnagram(string candidate) {
        if (candidate == baseWord.ToLower()) return false;

        char[] temp = candidate.ToCharArray();
        Array.Sort(temp);
        var sortedCandidate = string.Join("", temp);

        temp = baseWord.ToLower().ToCharArray();
        Array.Sort(temp);
        var sortedBaseWord = string.Join("", temp);

        return sortedCandidate == sortedBaseWord;
    }
}