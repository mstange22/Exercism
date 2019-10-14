using System;
using System.Linq;

public class Anagram
{
    private readonly string baseWord;

    public Anagram(string baseWord)
    {
        this.baseWord = baseWord.ToLower();
    }

    public string[] FindAnagrams(string[] potentialMatches) =>
        potentialMatches
            .Where(s => isAnagram(s.ToLower()))
            .ToArray();

    private bool isAnagram(string candidate) => 
        candidate == baseWord ? false : (
            string.Concat(candidate.OrderBy(c => c)) == string.Concat(baseWord.OrderBy(c => c))
        );
}