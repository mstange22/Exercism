using System.Collections.Generic;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> nums, int max)
    {
        int sum = 0;
        HashSet<int> multiples = new HashSet<int>();
        foreach (int n in nums) {
            for (int i = 0; n != 0 && i * n < max; i++) {
                if (!multiples.Contains(i * n)) {
                    sum += (i * n);
                    multiples.Add(i * n);
                }
            }
        }
        return sum;
    }
}