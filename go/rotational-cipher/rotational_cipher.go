package rotationalcipher

// RotationalCipher encodes a string with the given rotation
func RotationalCipher(s string, rot int) (res string) {
	for _, r := range s {
		if r >= 'a' && r <= 'z' {
			res += string(((r + rune(rot) - 'a') % 26) + 'a')
		} else if r >= 'A' && r <= 'Z' {
			res += string(((r + rune(rot) - 'A') % 26) + 'A')
		} else {
			res += string(r)
		}
	}
	return
}
