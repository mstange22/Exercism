package raindrops

import "fmt"

// Convert takes an integer and returns a string.
// If the number has factors of 3, 5, 7, build and return an approptiate string.
// If no factors, pass through the origninal number as a string.
func Convert(num int) string {
	res := ""
	if num%3 == 0 {
		res += "Pling"
	}
	if num%5 == 0 {
		res += "Plang"
	}
	if num%7 == 0 {
		res += "Plong"
	}
	if res == "" {
		return fmt.Sprintf("%d", num)
	}
	return res
}
