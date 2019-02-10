package cipher

import (
	"regexp"
	"strings"
)

// Cipher is an used by Caesar struct?  I think?
type Cipher interface {
	Encode(string) string
	Decode(string) string
}

// Caesar is a struct used to invoke the Cipher interface methods.
type Caesar struct {
	shift int
}

// Vigenere is a struct used to invoke the Vigenere interface methods.
type Vigenere struct {
	key string
}

// regex to validate Vigenere key
var re = regexp.MustCompile(`(^a+$)|( )|([A-Z0-9,])`)

// NewCaesar returns a pointer to a Caesar.
func NewCaesar() *Caesar {
	c := new(Caesar)
	c.shift = 3
	return c
}

// Encode encodes a string using the Caesar shift.
func (c Caesar) Encode(s string) (res string) {
	s = strings.ToLower(s)
	i := 0
	for _, r := range s {
		if r >= 'a' && r <= 'z' {
			newChar := string(((r + rune(c.shift) - 'a' + 26) % 26) + 'a')
			res += newChar
			i++
		}
	}
	return res
}

// Decode decodes a string using the Caesar shift.
func (c Caesar) Decode(s string) (res string) {
	for _, r := range s {
		if r >= 'a' && r <= 'z' {
			newChar := string(((r - rune(c.shift) + 26 - 'a') % 26) + 'a')
			res += newChar
		}
	}
	return res
}

// NewShift sets the shift value and returns a pointer to a Caesar.
func NewShift(n int) *Caesar {
	if n == 0 || n <= -26 || n >= 26 {
		return nil
	}
	c := new(Caesar)
	c.shift = n
	return c
}

// NewVigenere sets the validates and sets the Vigenere key
// and returns a pointer to a Caesar struct.
func NewVigenere(s string) *Vigenere {
	if len(s) == 0 {
		return nil
	}
	if re.MatchString(s) {
		return nil
	}
	v := new(Vigenere)
	v.key = s
	return v
}

// Encode encodes a string with Vigenere key.
func (v Vigenere) Encode(s string) (res string) {
	s = strings.ToLower(s)
	i := 0
	for _, r := range s {
		shift := int((v.key[i%len(v.key)]) - 'a')
		if r >= 'a' && r <= 'z' {
			newChar := string(((r + rune(shift) - 'a' + 26) % 26) + 'a')
			res += newChar
			i++
		}
	}
	return res
}

// Decode decodes a string with the Vigenere key.
func (v Vigenere) Decode(s string) (res string) {
	for i, r := range s {
		shift := int(v.key[i%len(v.key)] - 'a')
		if r >= 'a' && r <= 'z' {
			newChar := string(((r - rune(shift) + 26 - 'a') % 26) + 'a')
			res += newChar
		}
	}
	return res
}
