using System;
using System.Collections.Generic;
using System.Linq;

public static class FoodChain
{
    private const int FLY = 1;
    private const int SPIDER = 2;
    private const int HORSE = 8;
    private static string[,] parts = { { "", "" },
        { "fly", "I don't know why she swallowed the fly. Perhaps she'll die." },
        { "spider", "It wriggled and jiggled and tickled inside her." },
        { "bird", "How absurd to swallow a bird!" },
        { "cat", "Imagine that, to swallow a cat!" },
        { "dog", "What a hog, to swallow a dog!" },
        { "goat", "Just opened her throat and swallowed a goat!" },
        { "cow", "I don't know how she swallowed a cow!" },
        { "horse", "She's dead, of course!" }
    };

    public static string Recite(int verseNumber)
    {
        var res = "I know an old lady who swallowed a " + parts[verseNumber, 0] + ".\n";
        if (verseNumber == HORSE)
        {
            return res + parts[HORSE, 1];
        }
        if (verseNumber != FLY)
        {
            res += parts[verseNumber, 1] + "\n";
        }
        for (int i = verseNumber; i > FLY; i--)
        {
            res += "She swallowed the " + parts[i, 0] + " to catch the " + parts[i - 1, 0];
            res += (i - 1 == SPIDER) ? " that wriggled and jiggled and tickled inside her.\n" :  ".\n";
        }
        res += parts[FLY, 1];
        return res;
    }

    public static string Recite(int startVerse, int endVerse) =>
        String.Join("\n\n", Enumerable.Range(startVerse, endVerse).Select(i => Recite(i)));
}