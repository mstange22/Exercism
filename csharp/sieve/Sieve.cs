using System;
using System.Collections.Generic;
using System.Linq;

public static class Sieve
{
    public static int[] Primes(int limit)
    {
        // var primes = new List<int>();
        // var composites = new HashSet<int>();
        var numbers = new Dictionary<int, bool>();

        if (limit < 2) {
            throw new ArgumentOutOfRangeException("No primes under 2.");
        }

        for (int i = 2; i <= limit; i++) {
            // if (!composites.Contains(i)) {
            if (!numbers.ContainsKey(i)) {
                // primes.Add(i);
                numbers[i] = true;
                for (int j = i + i; j <= limit; j += i) {
                    // composites.Add(j);
                    numbers[j] = false;
                }
            }
        }
        // return primes.ToArray();
        return numbers.Keys.Where(k => numbers[k]).ToArray();
    }
}