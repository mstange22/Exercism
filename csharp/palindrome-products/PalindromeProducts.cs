using System;
using System.Collections.Generic;
using System.Linq;

public static class PalindromeProducts
{
    private static bool isPalindrome(int prod) {
        string prodStr = prod.ToString();
        for (int i = 0; i < prodStr.Length / 2; i++) {
            if (prodStr[i] != prodStr[prodStr.Length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    public static (int, IEnumerable<(int,int)>) Largest(int minFactor, int maxFactor)
    {
        if (minFactor > maxFactor) {
            throw new ArgumentException();
        }
        int largest = 0;
        var factors = new List<(int, int)> ();
        for (int i = minFactor; i <= maxFactor; i++) {
            for (int j = minFactor; j <= maxFactor; j++){
                int prod = i * j;
                if (PalindromeProducts.isPalindrome(prod)) {
                    if (prod > largest) {
                        largest = prod;
                        factors = new List<(int, int)>() { (i, j) };
                    } else if (prod == largest) {
                        if (!factors.Contains((j, i))) {
                            factors.Add((i, j));
                        }
                    }
                }
            }
        }
        if (largest == 0) {
            throw new ArgumentException();
        }
        return (largest, factors);
    }

    public static (int, IEnumerable<(int,int)>) Smallest(int minFactor, int maxFactor)
    {
        if (minFactor > maxFactor) {
            throw new ArgumentException();
        }
        int smallest = minFactor * maxFactor;
        var factors = new List<(int, int)> ();
        for (int i = minFactor; i <= maxFactor; i++) {
            for (int j = minFactor; j <= maxFactor; j++){
                int prod = i * j;
                if (PalindromeProducts.isPalindrome(prod)) {
                    if (prod < smallest) {
                        smallest = prod;
                        factors = new List<(int, int)>() { (i, j) };
                    } else if (prod == smallest) {
                        if (!factors.Contains((j, i))) {
                            factors.Add((i, j));
                        }
                    }
                }
            }
        }
        if (smallest == minFactor * maxFactor) {
            throw new ArgumentException();
        }
        return (smallest, factors);
    }
}
