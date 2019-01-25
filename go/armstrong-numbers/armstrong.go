package armstrong

import (
	"math"
	"strconv"
)

// IsNumber returns true if n is an Armstrong number.
func IsNumber(n int) bool {
	s := strconv.Itoa(n)
	sum := 0
	for _, r := range s {
		sum += int(math.Pow(float64(r-'0'), float64(len(s))))
	}
	return sum == n
}
