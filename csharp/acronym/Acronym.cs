using System;
using System.Linq;

public static class Acronym
{
    public static string Abbreviate(string phrase)
    {
        string[] separator = { " ", "-", "_" };
        string[] tokens = phrase.ToUpper().Split(separator, StringSplitOptions.RemoveEmptyEntries);
        return string.Join("", tokens.Select(token => token[0]));
    }
}