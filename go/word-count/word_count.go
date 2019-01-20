package wordcount

import (
	"regexp"
	"strings"
)

// Frequency is a map
type Frequency map[string]int

// WordCount counts words
func WordCount(s string) Frequency {
	f := Frequency{}
	re := regexp.MustCompile("[a-zA-Z0-9]+('?[a-zA-Z0-9]+|[a-zA-Z0-9]*)")
	words := re.FindAllString(s, -1)
	for _, w := range words {
		w = strings.ToLower(w)
		if _, ok := f[w]; ok {
			f[w]++
		} else {
			f[w] = 1
		}
	}
	return f
}
