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
        int sum = 1;
        if (number <= 0) {
            throw new ArgumentOutOfRangeException("Number must be greater than 0.");
        }
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }
        return sum == number && number != 1 ? Classification.Perfect :
            sum > number ? Classification.Abundant : Classification.Deficient;
    }
}
