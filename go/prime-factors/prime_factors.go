package prime

// Factors returns all factors of a number in inctrerasing order
func Factors(n int64) []int64 {
	factor := int64(2)
	factors := []int64{}
	for n > 1 {
		for n%factor == 0 {
			factors = append(factors, factor)
			n /= factor
		}
		factor++
	}
	return factors
}
