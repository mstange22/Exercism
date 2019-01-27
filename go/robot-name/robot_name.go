package robotname

import (
	"errors"
	"math/rand"
)

// Robot is a robot.
type Robot struct {
	name string
}

var names = map[string]bool{"": true}

// Name defines and returns a robot's name.
func (r *Robot) Name() (string, error) {
	if r.name != "" {
		return r.name, nil
	}
	if len(names) == maxNames+1 {
		return "", errors.New("namespace is exhausted")
	}

	for names[r.name] {
		r.name += string(rand.Intn(26) + 'A')
		r.name += string(rand.Intn(26) + 'A')
		r.name += string(rand.Intn(10) + '0')
		r.name += string(rand.Intn(10) + '0')
		r.name += string(rand.Intn(10) + '0')
	}

	names[r.name] = true
	return r.name, nil
}

// Reset resets a robot.
func (r *Robot) Reset() {
	r.name = ""
}
