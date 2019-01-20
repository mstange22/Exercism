package clock

import "strconv"

// Clock is a clock with hours and minutes.
type Clock struct {
	hours   string
	minutes string
}

// SetTime abstracts the logic to determine the correct time.
func SetTime(hour, minute int) (string, string) {
	extraHours := minute / 60
	if minute < 0 && minute%60 != 0 {
		extraHours--
	}
	hours := strconv.Itoa((((hour + extraHours) % 24) + 24) % 24)
	if len(hours) == 1 {
		hours = "0" + hours
	}
	minutes := strconv.Itoa(((minute % 60) + 60) % 60)
	if len(minutes) == 1 {
		minutes = "0" + minutes
	}
	return hours, minutes
}

// New is a constructor.
func New(hour, minute int) (c Clock) {
	c.hours, c.minutes = SetTime(hour, minute)
	return
}

// String returns the current time in string format.
func (c Clock) String() string {
	return c.hours + ":" + c.minutes
}

// Add adds minutes.
func (c Clock) Add(minutes int) Clock {
	currHours, err1 := strconv.Atoi(c.hours)
	currMinutes, err2 := strconv.Atoi(c.minutes)
	if err1 == nil && err2 == nil {
		c.hours, c.minutes = SetTime(currHours, currMinutes+minutes)
	}
	return c
}

// Subtract subtracts minutes.
func (c Clock) Subtract(minutes int) Clock {
	currHours, err1 := strconv.Atoi(c.hours)
	currMinutes, err2 := strconv.Atoi(c.minutes)
	if err1 == nil && err2 == nil {
		c.hours, c.minutes = SetTime(currHours, currMinutes-minutes)
	}
	return c
}
