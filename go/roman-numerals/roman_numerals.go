package romannumerals

import "errors"

// ToRomanNumeral returns the roman numeral of an integer.
func ToRomanNumeral(n int) (string, error) {
	if n > 3000 || n < 1 {
		return "", errors.New("number must be between [1 - 3000]")
	}
	res := ""
	type Roman struct {
		arabic int
		roman  string
	}
	roman := []Roman{
		{1000, "M"},
		{900, "CM"},
		{500, "D"},
		{400, "CD"},
		{100, "C"},
		{90, "XC"},
		{50, "L"},
		{40, "XL"},
		{10, "X"},
		{9, "IX"},
		{5, "V"},
		{4, "IV"},
		{1, "I"},
	}
	for i := 0; n > 0; i++ {
		for n >= roman[i].arabic {
			res += roman[i].roman
			n -= roman[i].arabic
		}
	}
	return res, nil
}
