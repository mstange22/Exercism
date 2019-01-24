package strand

// ToRNA returns a trasnscripted string.
func ToRNA(dna string) (res string) {
	m := map[rune]string{
		'G': "C",
		'C': "G",
		'T': "A",
		'A': "U",
	}

	for _, r := range dna {
		res += m[r]
	}

	return
}
