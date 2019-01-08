package leap

// IsLeapYear determines whether or not the parameter year is a leap year
func IsLeapYear(year int) bool {
	if year%4 != 0 {
		return false
	}
	if year%100 != 0 {
		return true
	}
	return year%400 == 0
}
