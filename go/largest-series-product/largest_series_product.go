package lsproduct

import (
	"errors"
	"strconv"
)

// LargestSeriesProduct finds the largest product of n adjacent numbers
func LargestSeriesProduct(digits string, span int) (int, error) {
	if len(digits) < span {
		return 0, errors.New("span must be smaller than string length")
	}
	if span == 0 {
		return 1, nil
	}
	if span < 0 {
		return 0, errors.New("span must not be less than zero")
	}

	// convert string to []int
	arr := make([]int, len(digits))
	for i, d := range digits {
		temp, err := strconv.Atoi(string(d))
		if err != nil {
			return 0, errors.New("digits input must only contain digits")
		}
		arr[i] = temp
	}

	prod := 1
	largestProd := 0

	// traverse arr once, removing first digit and adding next.
	// rebuild span if first digit was 0
	for i, digit := range arr {
		// build first span
		if i < span {
			prod *= digit
		} else {
			if arr[i-span] != 0 {
				prod /= arr[i-span]
				prod *= digit
			} else {
				prod = 1
				for j := i - span + 1; j <= i; j++ {
					prod *= arr[j]
				}
			}
		}
		// after building first span, compare every prod with largestProd
		if i >= span-1 && prod > largestProd {
			largestProd = prod
		}
	}
	return largestProd, nil
}
