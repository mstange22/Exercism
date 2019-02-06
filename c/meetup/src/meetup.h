#ifndef MEETUP_H
#define MEETUP_H

#include <stdbool.h>

int meetup_day_of_month(int, int, char*, char*);
int get_index_of_day(char*);
int get_first_day_of_month(int, int);
bool is_leap_year(int);

#endif
