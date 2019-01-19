package pythagorean

import (
	"fmt"
	"math"
)

// Triplet is a 3-element array of int
type Triplet [3]int

// Range returns a list of all Pythagorean triplets with sides in the
// range min to max inclusive.
func Range(min, max int) (res []Triplet) {
	for a := min; a < max; a++ {
		for b := a + 1; b <= max; b++ {
			c := math.Sqrt(float64((a * a)) + float64((b * b)))
			if c == math.Trunc(c) && int(math.Trunc(c)) <= max {
				res = append(res, Triplet{a, b, int(c)})
			}
		}
	}
	return
}

// Sum returns a list of all Pythagorean triplets where the sum a+b+c
// (the perimeter) is equal to p.
func Sum(p int) (res []Triplet) {
	triplets := Range(1, p)
	for _, triplet := range triplets {
		if triplet[0]+triplet[1]+triplet[2] == p {
			res = append(res, triplet)
		}
	}

	fmt.Println(res)
	return res
}
