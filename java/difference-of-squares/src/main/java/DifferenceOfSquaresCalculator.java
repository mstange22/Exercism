class DifferenceOfSquaresCalculator {
    int computeSquareOfSumTo(int input) {
        // n(n+1)/2
        int sum = input * (input + 1) / 2;
        return sum * sum;
    }

    int computeSumOfSquaresTo(int input) {
        // n(n+1)(2n+1)/6
        return input * (input + 1) * (2 * input + 1) / 6;
    }

    int computeDifferenceOfSquares(int input) {
        return computeSquareOfSumTo(input) - computeSumOfSquaresTo(input);
    }
}