package series

// All returns all substrings of length n
func All(n int, s string) []string {
	if len(s) < n {
		return nil
	}
	sub := s[0:n]
	res := []string{sub}
	for i := n; i < len(s); i++ {
		sub = sub[1:] + string(s[i])
		res = append(res, sub)
	}
	return res
}

// UnsafeFirst returns the first substring of s with length n.
func UnsafeFirst(n int, s string) string {
	return s[0:n]
}
