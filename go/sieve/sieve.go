package sieve

// Sieve returns all prime numbers up to (and including) limit.
func Sieve(limit int) (primes []int) {
	m := map[int]bool{}
	num := 2
	for num <= limit {
		if _, ok := m[num]; !ok {
			primes = append(primes, num)
			for i := num; i <= limit; i += num {
				m[i] = true
			}
		}
		num++
	}
	return
}
