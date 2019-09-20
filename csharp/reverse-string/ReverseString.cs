using System;
using System.Text;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        StringBuilder res = new StringBuilder();
        for (int i = input.Length - 1; i >= 0; i--) {
            res.Append(input[i]);
        }
        return res.ToString();
    }
}