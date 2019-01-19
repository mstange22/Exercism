package anagram

import (
	"sort"
	"strings"
)

// SortString sorts strings.
func SortString(w string) string {
	s := strings.Split(w, "")
	sort.Strings(s)
	return strings.Join(s, "")
}

// Detect detects anagrams.
func Detect(s string, candidates []string) []string {
	res := []string{}
	s = strings.ToLower(s)
	for _, c := range candidates {
		lowerC := strings.ToLower(c)
		if lowerC != s {
			if SortString(s) == SortString(lowerC) {
				res = append(res, c)
			}
		}
	}
	return res
}
