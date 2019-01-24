package cryptosquare

import (
	"math"
	"regexp"
	"strings"
)

// NormalizeText normalizes text.
func NormalizeText(s string) (res string) {
	s = strings.ToLower(s)
	re := regexp.MustCompile("[0-9A-Za-z]")
	for _, r := range s {
		if re.MatchString(string(r)) {
			res += string(r)
		}
	}
	return
}

// Size returns the column and row lengths.
func Size(s string) (c int, r int) {
	c = int(math.Ceil(math.Sqrt(float64(len(s)))))
	r = int(math.Floor(math.Sqrt(float64(len(s)))))
	if c*r < len(s) {
		r++
	}
	return
}

// Rows breaks up a string into chunks.
func Rows(s string, size int) (rows []string) {
	temp := ""
	for i, r := range s {
		if i != 0 && i%size == 0 {
			rows = append(rows, temp)
			temp = ""
		}
		temp += string(r)
	}
	rows = append(rows, temp)
	return
}

// CodedMessage translates rows into a string.
func CodedMessage(rows []string, size int) (res string) {
	for i := 0; i < size; i++ {
		for j := 0; j < len(rows); j++ {

			if i < len(rows[j]) {
				res += string(rows[j][i])
			} else {
				res += " "
			}
		}
	}
	return
}

// Output breaks up the coded message.
func Output(s string, size int) (res string) {
	for i := 0; i < len(s); i++ {
		if i != 0 && i%size == 0 {
			res += " "
		}
		res += string(s[i])
	}
	return
}

// Encode encodes a string.
func Encode(s string) string {
	normalizedText := NormalizeText(s)
	c, r := Size(normalizedText)
	rows := Rows(normalizedText, c)
	codedMessage := CodedMessage(rows, c)
	return Output(codedMessage, r)
}
