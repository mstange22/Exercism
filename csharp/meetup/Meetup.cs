using System;

public enum Schedule
{
    Teenth,
    First,
    Second,
    Third,
    Fourth,
    Last
}

public class Meetup
{
    readonly int month;
    readonly int year;
    public Meetup(int month, int year)
    {
        this.month = month;
        this.year = year;
    }

    public DateTime Day(DayOfWeek dayOfWeek, Schedule schedule)
    {
        DayOfWeek firstDayOfMonth = new DateTime(year, month, 1).DayOfWeek;

        // check if target day is before or after first day of month
        int dateOfFirstTargetDayOfWeek = dayOfWeek >= firstDayOfMonth ? (
            1 + (int)dayOfWeek - (int)firstDayOfMonth
        ) : (
            7 - (int)firstDayOfMonth + 1 + (int)dayOfWeek
        );
        int day = dateOfFirstTargetDayOfWeek;
        switch (schedule) {
            case Schedule.Teenth:
                day = day < 6 ? day + 14 : day + 7;
                break;
            case Schedule.Second:
                day += 7;
                break;
            case Schedule.Third:
                day += 14;
                break;
            case Schedule.Fourth:
                day += 21;
                break;
            case Schedule.Last:
                if (month == 2) {
                    // leap year
                    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
                        day += day == 1 ? 28 : 21;
                    } else {
                        day += 21;
                    }
                } else {
                    if (DateTime.DaysInMonth(year, month) == 30) {
                        day += day < 3 ? 28 : 21;
                    } else {
                        day += day < 4 ? 28 : 21;
                    }
                }
                break;
            default:
                break;
        }

        return new DateTime(year, month, day);
    }
}