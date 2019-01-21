package clock

import "strconv"

// Clock is a clock with hours and minutes.
type Clock struct {
	minutes int
}

// New is a constructor.
func New(hour, minute int) (c Clock) {
	c.minutes = ((((hour%24)+24)%24)*60 + (minute%(24*60)+(24*60))%(24*60)) % (24 * 60)
	return
}

// String returns the current time in string format.
func (c Clock) String() string {
	intHours := (c.minutes / 60) % 24
	if c.minutes < 0 && c.minutes%60 != 0 {
		intHours--
	}
	hours := strconv.Itoa((intHours + 24) % 24)
	if len(hours) == 1 {
		hours = "0" + hours
	}
	minutes := strconv.Itoa(((c.minutes % 60) + 60) % 60)
	if len(minutes) == 1 {
		minutes = "0" + minutes
	}
	return hours + ":" + minutes
}

// Add adds minutes.
func (c Clock) Add(minutes int) Clock {
	c.minutes += minutes
	return c
}

// Subtract subtracts minutes.
func (c Clock) Subtract(minutes int) Clock {
	c.minutes -= minutes
	return c
}
