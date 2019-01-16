package isogram

import "unicode"

// IsIsogram determines if a word has a repeating char.
func IsIsogram(s string) bool {
	charMap := map[rune]bool{}

	for _, char := range s {
		newChar := unicode.ToLower(char)
		if unicode.IsLetter(char) {
			if charMap[newChar] {
				return false
			}
			charMap[newChar] = true
		}
	}

	return true
}
