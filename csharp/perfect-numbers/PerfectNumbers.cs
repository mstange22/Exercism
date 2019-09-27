using System;

public enum Classification
{
    Perfect,
    Abundant,
    Deficient
}

public static class PerfectNumbers
{
    public static Classification Classify(int number)
    {
        int sum = 0;
        if (number <= 0) {
            throw new ArgumentOutOfRangeException("Number must be greater than 0.");
        }
        for (int i = 1; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        if (sum == number) {
            return Classification.Perfect;
        }
        return sum < number ? Classification.Deficient : Classification.Abundant;
    }
}
