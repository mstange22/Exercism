package letter

import "fmt"

// FreqMap records the frequency of each rune in a given text.
type FreqMap map[rune]int

// Frequency counts the frequency of each rune in a given text and returns this
// data as a FreqMap.
func Frequency(s string) FreqMap {
	fmt.Println("in Frequency")
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	fmt.Println("in Frequency, map:", m)
	return m
}

// ConcurrentFrequency concurrently counts the frequency of runes in multiple strings
func ConcurrentFrequency(text []string) FreqMap {
	c := make(chan FreqMap)
	res := FreqMap{}
	for _, t := range text {
		go func(t string) {
			c <- Frequency(t)
		}(t)
	}
	for i := 0; i < len(text); i++ {
		m := <-c
		for k, v := range m {
			res[k] += v
		}
	}
	return res
}
