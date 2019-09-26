using System;
using System.Linq;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        string numberString = number.ToString();
        return (int)numberString.Sum(c => Math.Pow(Char.GetNumericValue(c), numberString.Length)) == number;
    }
}