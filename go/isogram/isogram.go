package isogram

import "strings"

// IsIsogram determines if a word has a repeating char.
func IsIsogram(s string) bool {
	charMap := map[string]int{}

	for i := range s {
		newChar := strings.ToLower(string(s[i]))
		if newChar != "-" && newChar != " " {
			if charMap[newChar] != 0 {
				return false
			}
			charMap[newChar] = 1
		}
	}

	return true
}
