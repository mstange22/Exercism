package allergies

// Allergies tests for allergies given a score.
func Allergies(score uint) (allergies []string) {
	allergens := map[int]string{
		1:   "eggs",
		2:   "peanuts",
		4:   "shellfish",
		8:   "strawberries",
		16:  "tomatoes",
		32:  "chocolate",
		64:  "pollen",
		128: "cats",
	}

	for i := 1; i <= 128; i *= 2 {
		if score&uint(i) == uint(i) {
			allergies = append(allergies, allergens[i])
		}
	}
	return
}

// AllergicTo returns true if allergic to the allergen, else false.
func AllergicTo(score uint, allergen string) bool {
	m := map[string]uint{
		"eggs":         1,
		"peanuts":      2,
		"shellfish":    4,
		"strawberries": 8,
		"tomatoes":     16,
		"chocolate":    32,
		"pollen":       64,
		"cats":         128,
	}
	if score&m[allergen] != 0 {
		return true
	}
	return false
}
