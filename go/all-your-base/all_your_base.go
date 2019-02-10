package allyourbase

import (
	"errors"
	"math"
)

// ConvertToBase converts a number to the given base.
func ConvertToBase(inputBase int, digits []int, outputBase int) ([]int, error) {
	if inputBase < 2 {
		return []int{}, errors.New("input base must be >= 2")
	}
	if outputBase < 2 {
		return []int{}, errors.New("output base must be >= 2")
	}
	if len(digits) == 0 {
		return []int{0}, nil
	}
	res := []int{}
	tempNum := 0
	for i, exp := 0, len(digits)-1; i < len(digits); i, exp = i+1, exp-1 {
		if digits[i] < 0 || digits[i] >= inputBase {
			return []int{}, errors.New("all digits must satisfy 0 <= d < input base")
		}
		tempNum += digits[i] * int(math.Pow(float64(inputBase), float64(exp)))
	}
	if tempNum == 0 {
		return []int{0}, nil
	}
	for tempNum > 0 {
		res = append([]int{tempNum % outputBase}, res...)
		tempNum /= outputBase
	}

	return res, nil
}
