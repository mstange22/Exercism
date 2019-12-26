using System;
using System.Linq;

public static class RotationalCipher
{
    public static string Rotate(string text, int shiftKey) =>
        String.Join("",
            text.Select(c => RotationalCipher.translate(c, shiftKey))
        );

    private static char translate(char c, int shiftKey) {
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
            int charPos = Char.ToUpper(c) - 'A';
            int newCharPos = (charPos + shiftKey) % 26;
            return (char)((int)c + newCharPos - charPos);
        } else {
            return c;
        }
    }
}