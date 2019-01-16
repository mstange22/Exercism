package isogram

import "strings"

// IsIsogram determines if a word has a repeating char.
func IsIsogram(s string) bool {
	charMap := map[string]bool{}

	for i := range s {
		newChar := strings.ToLower(string(s[i]))
		if newChar != "-" && newChar != " " {
			if charMap[newChar] {
				return false
			}
			charMap[newChar] = true
		}
	}

	return true
}
