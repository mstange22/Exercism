package pangram

import "strings"

// IsPangram return true or false
func IsPangram(s string) bool {
	alpha := "abcdefghijklmnopqrstuvwxyz"
	s = strings.ToLower(s)
	for _, a := range alpha {
		if !strings.Contains(s, string(a)) {
			return false
		}
	}
	return true
}
