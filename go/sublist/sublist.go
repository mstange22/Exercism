package sublist

// Relation is the relation of lists
type Relation string

// Sublist returns
func Sublist(a, b []int) Relation {
	if len(a) == 0 {
		if len(b) == 0 {
			return "equal"
		}
		return "sublist"
	}
	if len(b) == 0 {
		return "superlist"
	}
	if IsSublist(a, b) {
		if len(a) == len(b) {
			return "equal"
		}
		return "sublist"
	}
	if IsSublist(b, a) {
		return "superlist"
	}
	return "unequal"
}

// IsSublist returns true if a is a sublist of b
func IsSublist(a, b []int) bool {
	// find potential start of a in b
	for i := 0; i < len(b); i++ {
		if b[i] == a[0] {
			// found potential start, check rest of a
			for j := 1; j < len(a) && j+i < len(b); j++ {
				if a[j] != b[j+i] {
					break
				}
				if j == len(a)-1 {
					return true
				}
			}
		}
	}
	return false
}
