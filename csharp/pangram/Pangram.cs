using System;

public static class Pangram
{
    private static string alpha = "abcdefghijklmnopqrstuvwxyz";
    public static bool IsPangram(string input)
    {
        string lower = input.ToLower();
        foreach (char c in alpha) {
            if (lower.IndexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }
}
