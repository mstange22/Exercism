package strain

// Ints is an array of integers.
type Ints []int

// Lists is a 2D array of integers.
type Lists [][]int

// Strings is an array of strings
type Strings []string

// Keep is the subset of the collection that meets the condition.
func (i Ints) Keep(func(int) bool) (res Ints) {
	return
}

// Discard is the subset of the collection that does not meet the condition.
func (i Ints) Discard(func(int) bool) (res Ints) {
	return
}

// Keep is the subset of the collection that meets the condition.
func (li Lists) Keep(func([]int) bool) (res Lists) {
	return
}

// Keep is the subset of the collection that meets the condition.
func (s Strings) Keep(func(string) bool) (res Strings) {
	return
}
