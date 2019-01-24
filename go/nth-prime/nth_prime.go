package prime

import "math"

// IsPrime checks if a number is prime.
func IsPrime(num int) bool {
	for i := 2; i <= int(math.Sqrt(float64(num))); i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}

// Nth returns the nth prime number
func Nth(n int) (int, bool) {
	if n == 0 {
		return 0, false
	}
	var primes = []int{2}
	for num := 3; len(primes) < n; num++ {
		if IsPrime(num) {
			primes = append(primes, num)
		}
	}
	return primes[len(primes)-1], true
}
