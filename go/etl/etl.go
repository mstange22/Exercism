package etl

import "strings"

// Transform converts old stuff to new stuff
func Transform(m map[int][]string) map[string]int {
	res := map[string]int{}
	for k, v := range m {
		for _, val := range v {
			res[strings.ToLower(val)] = k
		}
	}
	return res
}
