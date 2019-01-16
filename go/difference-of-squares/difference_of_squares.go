package diffsquares

import "math"

// SquareOfSum returns the square of the sum of n numbers.
func SquareOfSum(n int) int {
	sum := 0
	for i := 1; i <= n; i++ {
		sum += i
	}
	return int(math.Pow(float64(sum), 2))
}

// SumOfSquares returns the sum of the square of n numbers.
func SumOfSquares(n int) int {
	sum := 0
	for i := 1; i <= n; i++ {
		sum += int(math.Pow(float64(i), 2))
	}
	return sum
}

// Difference returns the square of the sum of n numbers.
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
