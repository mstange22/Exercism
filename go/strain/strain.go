package strain

// Ints is an array of integers.
type Ints []int

// Lists is a 2D array of integers.
type Lists [][]int

// Strings is an array of strings
type Strings []string

// Keep is the subset of the collection that meets the condition.
func (ints Ints) Keep(f func(int) bool) (res Ints) {
	for _, n := range ints {
		if f(n) {
			res = append(res, n)
		}
	}
	return
}

// Discard is the subset of the collection that does not meet the condition.
func (ints Ints) Discard(f func(int) bool) (res Ints) {
	for _, n := range ints {
		if !f(n) {
			res = append(res, n)
		}
	}
	return
}

// Keep is the subset of the collection that meets the condition.
func (lists Lists) Keep(f func([]int) bool) (res Lists) {
	for _, l := range lists {
		if f(l) {
			res = append(res, l)
		}
	}
	return
}

// Keep is the subset of the collection that meets the condition.
func (strs Strings) Keep(f func(string) bool) (res Strings) {
	for _, s := range strs {
		if f(s) {
			res = append(res, s)
		}
	}
	return
}
