using System;
using System.Collections.Generic;

public static class PythagoreanTriplet
{
    public static IEnumerable<(int a, int b, int c)> TripletsWithSum(int sum)
    {
        var triplets = new List<(int a, int b, int c)>();
        for (int a = 1; a < sum - (2 * a); a++) {
            for (int b = a + 1; b < sum / 2; b++) {
                int c = sum - a - b;
                if (a * a + b * b == c * c) {
                    triplets.Add((a, b, c));
                }
            }
        }
        return triplets;
    }
}