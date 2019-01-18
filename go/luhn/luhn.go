package luhn

import "strings"

// Valid checks a number for Luhn validity.
func Valid(num string) bool {
	num = strings.Replace(num, " ", "", -1)
	if len(num) <= 1 {
		return false
	}
	sum := 0
	for i := range num {
		newNum := int(num[len(num)-1-i] - '0')
		if newNum < 0 || newNum > 9 {
			return false
		}
		if i%2 == 1 {
			newNum = newNum * 2
			if newNum > 9 {
				newNum -= 9
			}
		}
		sum += newNum
	}

	return sum%10 == 0
}
