package secret

// Handshake returns an array of strings based on the binary representation of a number
func Handshake(num uint) []string {
	var res []string
	if num&1 == 1 {
		res = append(res, "wink")
	}
	if num&2 == 2 {
		res = append(res, "double blink")
	}
	if num&4 == 4 {
		res = append(res, "close your eyes")
	}
	if num&8 == 8 {
		res = append(res, "jump")
	}
	if num&16 == 16 {
		for i, j := 0, len(res)-1; i < j; i, j = i+1, j-1 {
			res[i], res[j] = res[j], res[i]
		}
	}
	return res
}
