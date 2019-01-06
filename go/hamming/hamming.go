package hamming

import "errors"

// Distance compares two dna strings and returns hamming distance
func Distance(a, b string) (int, error) {
	distance := 0

	if len(a) != len(b) {
		return -1, errors.New("input strings must have the same length")
	}

	for i := range a {
		if a[i] != b[i] {
			distance++
		}
	}
	return distance, nil
}
