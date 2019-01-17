package diffsquares

// SquareOfSum returns the square of the sum of n numbers.
func SquareOfSum(n int) int {
	sum := (n*n + n) / 2
	return sum * sum
}

// SumOfSquares returns the sum of the square of n numbers.
func SumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6
}

// Difference returns the square of the sum of n numbers.
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
