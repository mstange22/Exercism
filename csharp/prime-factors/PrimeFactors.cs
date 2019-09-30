using System;
using System.Collections.Generic;

public static class PrimeFactors
{
    public static long[] Factors(long number)
    {
        long testVal = 2L;
        var factors = new List<long>();
        while (testVal <= number) {
            if (number % testVal == 0) {
                factors.Add(testVal);
                number /= testVal;
            } else {
                testVal++;
            }
        }
        return factors.ToArray();
    }
}