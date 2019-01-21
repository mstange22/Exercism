package clock

import "fmt"

// Clock is a clock with hours and minutes.
type Clock struct {
	minutes int
}

// New is a constructor.
func New(hours, minutes int) Clock {
	minutes += hours * 60
	minutes %= 1440
	if minutes < 0 {
		minutes += 1440
	}
	return Clock{minutes}
}

// String returns the current time in string format.
func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.minutes/60, c.minutes%60)
}

// Add adds minutes.
func (c Clock) Add(minutes int) Clock {
	return New(0, c.minutes+minutes)
}

// Subtract subtracts minutes.
func (c Clock) Subtract(minutes int) Clock {
	return New(0, c.minutes-minutes)
}
