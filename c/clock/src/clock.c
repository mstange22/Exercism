#include "clock.h"
#include <stdio.h>

#define MINUTES_IN_DAY 1440
#define FORMAT "%02i:%02i"

void clock(time_text_t time_text, int hour, int minute)
{
  if (!time_text) return;
  // use total minutes
  minute += (hour * 60);
  // truncate / shift to 24-hour range
	minute %= MINUTES_IN_DAY;
	if (minute < 0)
  {
		minute += MINUTES_IN_DAY;
	}
  // write hours and minutes to time_text using div / mod
  snprintf(time_text, MAX_STR_LEN, FORMAT, minute / 60, minute % 60);
}

void clock_add(time_text_t time_text, int minute_offset)
{
  if (!time_text) return;
  int hour, minute;
  // extrapolate hour and minute from time_text
  sscanf(time_text, FORMAT, &hour, &minute);
  // use clock function with new minute value
  clock(time_text, hour, minute + minute_offset);
}
