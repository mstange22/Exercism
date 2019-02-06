#include "meetup.h"
#include <time.h>
#include <string.h>

char *days[] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" };
int days_in_month[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

bool is_leap_year(int year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

int get_index_of_day(char * day) {
  for (int i = 0; i < 7; i++) {
    if (strcmp(day, days[i]) == 0) return i;
  }
  return 0;
}

int get_first_day_of_month(int year, int month) {
  struct tm first_struct;
  time_t first_day_of_month;
  first_struct.tm_year = year - 1900;
  first_struct.tm_mon = month;
  first_struct.tm_mday = 1;
  first_struct.tm_hour = 0;
  first_struct.tm_min = 0;
  first_struct.tm_sec = 0;
  first_struct.tm_isdst = 0;
	first_day_of_month = mktime(&first_struct);
  return first_struct.tm_wday;
}

int meetup_day_of_month(int year, int month, char* desc, char* day) {
  int target_day_index = get_index_of_day(day);
  int first_day_of_month = get_first_day_of_month(year, month-1);
  int first_target_day_date = target_day_index >= first_day_of_month ? 
    target_day_index - first_day_of_month + 1 : 7 - first_day_of_month + target_day_index + 1;

  // set days in February (not necessary)
  if (month == 2) days_in_month[1] = is_leap_year(year) ? 29 : 28;

  // set variable teenth and last
  int teenth = first_target_day_date >= 6 ?
    first_target_day_date + 7 : first_target_day_date + 14;

  int last = days_in_month[month-1] - first_target_day_date >= 28 ?
    first_target_day_date + 28 : first_target_day_date + 21;

  if (strcmp(desc, "first") == 0) {
    return first_target_day_date;
  }
  if (strcmp(desc, "second") == 0) {
    return first_target_day_date + 7;
  }
  if (strcmp(desc, "third") == 0) {
    return first_target_day_date + 14;
  }
  if (strcmp(desc, "fourth") == 0) {
    return first_target_day_date + 21;
  }
  if (strcmp(desc, "fifth") == 0) {
    if (first_target_day_date + 28 > days_in_month[month-1]) {
      return 0;
    }
    return first_target_day_date + 28;
  }
  if (strcmp(desc, "last") == 0) {
    return last;
  }
  if (strcmp(desc, "teenth") == 0) {
    return teenth;
  }
  return 0;
}
