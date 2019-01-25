package cipher

import (
	"regexp"
	"strings"
)

// Cipher is an interface.
type Cipher interface {
	Encode(string) string
	Decode(string) string
}

// Caesar is a Caesar.
type Caesar struct {
	s string
}

var caesarShift = rune(3)
var vShift = ""

// NewCaesar returns a pointer to a Caesar.
func NewCaesar() *Caesar {
	return new(Caesar)
}

// Encode encodes a string.
func (c Caesar) Encode(s string) (res string) {
	s = strings.ToLower(s)
	i := 0
	for _, r := range s {
		if r >= 'a' && r <= 'z' {
			if vShift != "" {
				caesarShift = rune(vShift[i%len(vShift)]) - 'a'
			}
			newChar := string(((r + caesarShift - 'a' + 26) % 26) + 'a')
			res += newChar
			i++
		}
	}
	return res
}

// Decode decodes a string.
func (c Caesar) Decode(s string) (res string) {
	for i, r := range s {
		if vShift != "" {
			caesarShift = rune(vShift[i%len(vShift)] - 'a')
		}
		if r >= 'a' && r <= 'z' {
			newChar := string(((r - caesarShift + 26 - 'a') % 26) + 'a')
			res += newChar
		}
	}
	return res
}

// NewShift returns a pointer to a Caesar.
func NewShift(n int) *Caesar {
	if n == 0 || n <= -26 || n >= 26 {
		return nil
	}
	caesarShift = rune(n)
	return new(Caesar)
}

// NewVigenere returns a NewVigenere.
func NewVigenere(s string) *Caesar {
	if len(s) == 0 {
		return nil
	}
	re := regexp.MustCompile(`(^a+$)|( )|([A-Z0-9,])`)
	if re.MatchString(s) {
		return nil
	}

	vShift = s
	return new(Caesar)
}
