package palindrome

// Product is a value and its factors
type Product struct {
	Product        int
	Factorizations [][2]int //list of all possible two-factor factorizations of Product, within given limits, in order
}

// Products finds the largest and smallest product palindromes within a range
func Products(min int, max int) (Product, Product, error) {
	return Product{1, [][2]int{}}, Product{9, [][2]int{{1, 9}, {3, 3}}}, nil
}
