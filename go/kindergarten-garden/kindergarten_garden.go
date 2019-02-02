package kindergarten

import (
	"errors"
	"regexp"
	"sort"
	"strings"
)

// Garden represents a kindergarten classroom garden
type Garden struct {
	children []string
	rows     []string
}

var pm = map[rune]string{
	'C': "clover",
	'G': "grass",
	'R': "radishes",
	'V': "violets",
}

var cm = map[string]bool{}

// NewGarden is a Garden constructor
func NewGarden(diagram string, children []string) (*Garden, error) {
	cm = make(map[string]bool)
	newChildren := []string{}
	for _, child := range children {
		if _, ok := cm[child]; !ok {
			cm[child] = true
			newChildren = append(newChildren, child)
		} else {
			return &Garden{}, errors.New("duplicate child name")
		}
	}
	// fmt.Println("diagram:", diagram)
	if rune(diagram[0]) != '\n' {
		return &Garden{}, errors.New("wrong diagram format")
	}
	var rows = strings.Split(diagram[1:], "\n")
	if len(rows[0]) != len(rows[1]) {
		return &Garden{}, errors.New("mismatched rows")
	}
	if len(rows[0])%2 == 1 {
		return &Garden{}, errors.New("odd number of cups")
	}
	re := regexp.MustCompile(`^[A-Z]+$`)
	if !re.MatchString(rows[0]) {
		return &Garden{}, errors.New("invalid cup codes")
	}
	sort.Strings(newChildren)
	return &Garden{
		children: newChildren,
		rows:     rows,
	}, nil
}

// Plants returns the plants for a given child
func (g *Garden) Plants(child string) ([]string, bool) {
	childIndex := IndexOf(g.children, child)
	if childIndex == -1 {
		return []string{}, false
	}
	start := childIndex * 2
	res := []string{}
	for i := 0; i <= 1; i++ {
		for j := start; j <= start+1; j++ {
			res = append(res, pm[rune(g.rows[i][j])])
		}
	}
	return res, true
}

// IndexOf is a helper function to find the index of an item in a string
func IndexOf(slice []string, item string) int {
	for i := range slice {
		if slice[i] == item {
			return i
		}
	}
	return -1
}
