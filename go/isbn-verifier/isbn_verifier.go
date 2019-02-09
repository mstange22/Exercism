package isbn

// IsValidISBN validates an ISBN number.
func IsValidISBN(n string) bool {
	res, counter := 0, 10
	for _, r := range n {
		if r >= '0' && r <= '9' {
			res += (counter * int(r-'0'))
			counter--
		} else if r == 'X' && counter == 1 {
			res += 10
			counter--
		} else if r != '-' && r != ' ' {
			return false
		}
	}
	return counter == 0 && res%11 == 0
}
