package scale

import "strings"

// FindIndexOfNote is a helper function to find a starting index
func FindIndexOfNote(note string, scale []string) int {
	for i, s := range scale {
		if strings.ToUpper(s) == strings.ToUpper(note) {
			return i
		}
	}
	return -1
}

// Scale returns the notes in a scale
func Scale(tonic string, interval string) []string {
	// map for steps between notes in interval
	steps := map[string]int{"m": 1, "M": 2, "A": 3}
	// map to determine which scale to use
	sharpMap := map[string]int{
		"C": 1, "G": 1, "D": 1, "A": 1, "E": 1, "B": 1, "F#": 1, "e": 1, "a": 1, "b": 1, "f#": 1, "c#": 1, "g#": 1, "d#": 1,
	}

	// use either sharps or flats
	currentScale := []string{}
	if sharpMap[tonic] != 0 {
		currentScale = []string{"C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"}
	} else {
		currentScale = []string{"F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E"}
	}

	// return entire scale for chromatic scale
	if interval == "" {
		return currentScale
	}

	// find starting note and build scale to return
	noteIndex := FindIndexOfNote(tonic, currentScale)
	res := []string{}
	for i := range interval {
		res = append(res, currentScale[noteIndex%len(currentScale)])
		noteIndex += steps[string(interval[i])]
	}
	return res
}
