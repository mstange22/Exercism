using System;
using System.Linq;


public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        if (firstStrand.Length != secondStrand.Length) {
            throw new ArgumentException("Strands must be the same length.");
        }
        // return firstStrand.Select((c, i) => c == secondStrand[i] ? 0 : 1).Sum();
        return firstStrand.Zip(secondStrand, (first, second) => first == second ? 0 : 1).Sum();
    }
}