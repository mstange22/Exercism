package perfect

import (
	"errors"
	"math"
)

// Classisification constants
const (
	ClassificationDeficient = iota
	ClassificationPerfect
	ClassificationAbundant
)

// Classification holds the Classification constants
type Classification int

// ErrOnlyPositive is an error
var ErrOnlyPositive = errors.New("only positive values are accepted")

// SumFactors returns the sum of all factors of n
func SumFactors(n int64) int64 {
	sum := int64(1)
	for i := int64(2); i <= int64(math.Sqrt(float64(n))); i++ {
		if n%i == 0 {
			sum += i
			if n/i != i {
				sum += n / i
			}
		}
	}
	return sum
}

// Classify returns something
func Classify(n int64) (Classification, error) {
	if n < 1 {
		return 0, ErrOnlyPositive
	}
	if n == 1 {
		return ClassificationDeficient, nil
	}
	sum := SumFactors(n)
	if sum == n {
		return ClassificationPerfect, nil
	}
	if sum > n {
		return ClassificationAbundant, nil
	}
	return ClassificationDeficient, nil
}
