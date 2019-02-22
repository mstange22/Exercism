import java.time.DayOfWeek;
import java.time.LocalDate;

class Meetup {

  private final int month;
  private final int year;
  private static final int[] DAYS_IN_MONTH = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

  Meetup(int month, int year) {
    this.month = month;
    this.year = year;
  }

  LocalDate day(DayOfWeek targetDay, MeetupSchedule desc) {
    // get int values of DayOfWeek for both the 1st of the month and the target DayOfWeek
    int firstWeekdayValue = LocalDate.of(this.year, this.month, 1).getDayOfWeek().getValue();
    int targetDayValue = targetDay.getValue();

    // determine date of first occurence of target DayOfWeek 
    int targetDate;
    if (targetDayValue >= firstWeekdayValue ) {
      targetDate = 1 + (targetDayValue - firstWeekdayValue);
    } else {
      targetDate = 1 + (7 - firstWeekdayValue) + targetDayValue;
    }

    // if description is other than FIRST...
    if (desc == MeetupSchedule.SECOND) {
      targetDate += 7;
    } else if (desc == MeetupSchedule.THIRD) {
      targetDate += 14;
    } else if (desc == MeetupSchedule.FOURTH) {
      targetDate += 21;
    } else if (desc == MeetupSchedule.TEENTH) {
      targetDate = targetDate < 6 ? targetDate + 14 : targetDate + 7;
    } else if (desc == MeetupSchedule.LAST) {
      // if Feb and leap year, give an extra day
      if (this.month == 2 && (this.year % 4 == 0 && (this.year % 100 != 0 || this.year % 400 == 0))) {
        targetDate = targetDate + 28 > 29 ? targetDate + 21 : targetDate + 28;
      } else {
        targetDate = targetDate + 28 > DAYS_IN_MONTH[this.month] ? targetDate + 21 : targetDate + 28;
      }
    }

    return LocalDate.of(this.year, this.month, targetDate);
  }
}