package accumulate

// Accumulate accumulates
func Accumulate(given []string, converter func(string) string) []string {
	var res []string
	for _, s := range given {
		res = append(res, converter(s))
	}
	return res
}
