from datetime import date

class MeetupDayException(Exception):
  pass

DAYS_OF_WEEK = {
  'Sunday': 0,
  'Monday': 1,
  'Tuesday': 2,
  'Wednesday': 3,
  'Thursday': 4,
  'Friday': 5,
  'Saturday': 6,
}

def meetup_day(year, month, day_of_the_week, which):
  month_days = [
    None, 31,
    29 if month == 2 and year % 4 == 0 and (year % 100 != 0 or year % 400 == 0) else 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]

  # get day of week of the 1st of the month
  first_day_of_month = int(date(year, month, 1).strftime("%w"))

  # get first instance of target day in month
  first_target_day_num = DAYS_OF_WEEK[day_of_the_week]

  target_date = 1 + first_target_day_num - first_day_of_month \
    if first_target_day_num >= first_day_of_month \
    else 1 + (7 - first_day_of_month) + first_target_day_num

  if which == 'teenth':
    target_date += 7 if target_date > 5 else 14
  elif which == '2nd':
    target_date += 7
  elif which == '3rd':
    target_date += 14
  elif which == '4th':
    target_date += 21
  elif which == 'last':
    target_date += 21 if target_date + 28 > month_days[month] else 28
  elif which == '5th':
    if target_date + 28 > month_days[month]:
        raise MeetupDayException('Invalid 5th day')
    target_date += 28
  
  return date(year, month, target_date)