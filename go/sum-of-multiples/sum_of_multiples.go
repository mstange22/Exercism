package summultiples

//SumMultiples returns the sum of all multiples below a number
func SumMultiples(limit int, factors ...int) int {
	var m = map[int]bool{}
	sum := 0

	for _, factor := range factors {
		if factor != 0 {
			for multiple := factor; multiple < limit; multiple += factor {
				if !m[multiple] {
					sum += multiple
					m[multiple] = true
				}
			}
		}
	}

	return sum
}
