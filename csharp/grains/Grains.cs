using System;

public static class Grains
{
    public static ulong Square(int n)
    {
        if (n <= 0 || n > 64) {
            throw new ArgumentOutOfRangeException("Square must be between 1 and 64.");
        }
        return (ulong)Math.Pow(2, n - 1);
    }

    public static ulong Total()
    {
        ulong res = 0;
        for (int i = 0; i < 64; i++) {
            res += (ulong)Math.Pow(2, i);
        }
        return res;
    }
}