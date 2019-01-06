package space

// Planet is used in testCases instead of string
type Planet string

// Age returns space age (earth years) for the provided planet and seconds
func Age(seconds float64, planet Planet) (earthYears float64) {
	earthYears = seconds / 31557600
	switch planet {
	case "Mercury":
		earthYears /= 0.2408467
	case "Venus":
		earthYears /= 0.61519726
	case "Mars":
		earthYears /= 1.8808158
	case "Jupiter":
		earthYears /= 11.862615
	case "Saturn":
		earthYears /= 29.447498
	case "Uranus":
		earthYears /= 84.016846
	case "Neptune":
		earthYears /= 164.79132
	default:
	}
	return earthYears
}
