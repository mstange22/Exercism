using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Linq;

public static class AtbashCipher
{
    public static string Encode(string plainValue)
    {
        var cleaned = Regex.Replace(plainValue.ToLower(), @"[,. ]", "");
        var blocks = new List<string>();
        var currBlock = "";

        for (var i = 0; i < cleaned.Length; i++)
        {
            var c = cleaned[i];
            currBlock += Char.IsLetter(c) ? Translate(c) : c;
            // add space where necessary
            if (i % 5 == 4 && i != cleaned.Length - 1)
            {
                blocks.Add(currBlock);
                currBlock = "";
            }
        }
        blocks.Add(currBlock);
        return String.Join(" ", blocks);
    }

    public static string Decode(string encodedValue) =>
        String.Join("", encodedValue.Where(c => c != ' ')
            .Select(c => Char.IsLetter(c) ? Translate(c) : c)
        );

    private static char Translate(char c) => (char)('z' - (Char.ToUpper(c) - 'A'));
}
