package atbash

import "strings"

// Atbash returns an encoded string.
func Atbash(s string) (res string) {
	s = strings.ToLower(s)
	charCount := 0
	for _, r := range s {
		if (r >= '0' && r <= '9') || (r >= 'a' && r <= 'z') {
			if charCount != 0 && charCount%5 == 0 {
				res += " "
			}
			if r >= '0' && r <= '9' {
				res += string(r)
			} else {
				res += string('z' - r + 'a')
			}
			charCount++
		}
	}
	return
}
