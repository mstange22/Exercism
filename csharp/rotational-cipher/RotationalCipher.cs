using System;
using System.Linq;

public static class RotationalCipher
{
    public static string Rotate(string text, int shiftKey) =>
        String.Join("",
            text.ToCharArray().Select(c => RotationalCipher.translate(c, shiftKey))
        );

    public static char translate(char c, int shiftKey) {
        if (Char.IsLetter(c)) {
            int charPos = Char.ToUpper(c) - 'A';
            int newCharPos = (charPos + shiftKey) % 26;
            return (char)((int)c + newCharPos - charPos);
        } else {
            return c;
        }
    }
}