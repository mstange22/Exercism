using System;
using System.Collections.Generic;

public static class AllYourBase
{
    public static int[] Rebase(int inputBase, int[] inputDigits, int outputBase)
    {
        int base10 = 0;
        var outputDigits = new List<int>();

        if (inputBase < 2 || outputBase < 2) {
            throw new ArgumentException("Invalid base.");
        }

        int exp = inputDigits.Length - 1;
        foreach (var digit in inputDigits) {
            if (digit < 0 || digit >= inputBase) {
                throw new ArgumentException("Invalid digit.");
            }
            base10 += digit * (int)Math.Pow(inputBase, exp--);
        }

        if (base10 == 0) {
            return new []{ 0 };
        }

        while (base10 > 0) {
            outputDigits.Insert(0, base10 % outputBase);
            base10 /= outputBase;
        }

        return outputDigits.ToArray();
    }
}