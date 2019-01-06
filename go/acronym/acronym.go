package acronym

import "strings"

// Abbreviate creates and returns an acronym for a string
func Abbreviate(s string) string {
	a := string(s[0])

	for i, char := range s {
		if char == ' ' || char == '-' {
			a += string(s[i+1])
		}
	}

	return strings.ToUpper(a)
}
