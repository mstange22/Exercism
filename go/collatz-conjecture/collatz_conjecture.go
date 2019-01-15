package collatzconjecture

import "errors"

// CollatzConjecture calculates the number of steps to get from n to 1
func CollatzConjecture(n int) (int, error) {
	if n <= 0 {
		return 0, errors.New("n must be larger than 0")
	}
	steps := 0
	for n > 1 {
		steps++
		if n%2 == 0 {
			n = n / 2
		} else {
			n = (3 * n) + 1
		}
	}
	return steps, nil
}
