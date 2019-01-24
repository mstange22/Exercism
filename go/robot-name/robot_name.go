package robotname

import "math/rand"

// Robot is a robot.
type Robot struct {
	name string
}

var names = map[string]bool{}

// Name defines and returns a robot's name.
func (r *Robot) Name() (string, error) {
	if r.name == "" {
		r.name += string(rand.Intn(26) + 'A')
		r.name += string(rand.Intn(26) + 'A')
		r.name += string(rand.Intn(10) + '0')
		r.name += string(rand.Intn(10) + '0')
		r.name += string(rand.Intn(10) + '0')
	}
	if names[r.name] {
		r.Reset()
	}
	return r.name, nil
}

// Reset resets a robot.
func (r *Robot) Reset() {
	r.name = ""
}
