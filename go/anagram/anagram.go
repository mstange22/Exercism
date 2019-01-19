package anagram

import (
	"strings"
)

// Detect detects anagrams.
func Detect(s string, candidates []string) []string {
	res := []string{}
	s = strings.ToLower(s)
	for _, c := range candidates {
		temp := strings.ToLower(c)
		if temp != s && len(temp) == len(s) {
			for _, char := range s {
				if !strings.Contains(temp, string(char)) {
					break
				}
				temp = strings.Replace(temp, string(char), "", 1)
			}
			if len(temp) == 0 {
				res = append(res, c)
			}
		}
	}
	return res
}
