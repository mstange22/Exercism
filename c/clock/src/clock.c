#include "clock.h"
#include <stdio.h>

#define MINUTES_IN_DAY 1440

void clock(time_text_t time_text, int hour, int minute)
{
  // use total minutes
  minute += (hour * 60);
  // truncate / shift to 24-hour range
	minute %= MINUTES_IN_DAY;
	if (minute < 0)
  {
		minute += MINUTES_IN_DAY;
	}
  // write hours and minutes to time_text using div / mod
  sprintf(time_text, "%02i:%02i", minute / 60, minute % 60);
}

void clock_add(time_text_t time_text, int minute_offset)
{
  // extrapolate hour and minute from time_text
  int hour = ((time_text[0] - '0') * 10) + (time_text[1] - '0');
  int minute = ((time_text[3] - '0') * 10) + (time_text[4] - '0');
  // use clock function with new minute value
  clock(time_text, hour, minute + minute_offset);
}
