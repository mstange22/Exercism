package brackets

import "regexp"

// Bracket checks for bracket validity.
func Bracket(s string) bool {
	bracketStack := []string{}
	for _, r := range s {
		brackets := regexp.MustCompile(`[\[\]\{\}\(\)]`)
		if brackets.MatchString(string(r)) {
			open := regexp.MustCompile(`[\[\{\(]`)
			if open.MatchString(string(r)) {
				bracketStack = append(bracketStack, string(r))
			} else {
				if len(bracketStack) == 0 {
					return false
				}
				if (string(r) == "]" && bracketStack[len(bracketStack)-1] != "[") ||
					(string(r) == "}" && bracketStack[len(bracketStack)-1] != "{") ||
					(string(r) == ")" && bracketStack[len(bracketStack)-1] != "(") {
					return false
				}
				bracketStack = bracketStack[0 : len(bracketStack)-1]
			}
		}
	}
	return len(bracketStack) == 0
}
