import java.time.DayOfWeek;
import java.time.LocalDate;

val DAYS_IN_MONTH = arrayOf(0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

class Meetup(val month: Int, val year: Int) {
  val firstDayValue = LocalDate.of(year, month, 1).getDayOfWeek().getValue()

  fun day(day: DayOfWeek, week: MeetupSchedule): LocalDate {
    val dayValue = day.getValue()
    val dateOfFirstTargetDayOfMonth = if (dayValue >= firstDayValue) dayValue - firstDayValue + 1 else 8 - (firstDayValue - dayValue)

    // start with FIRST
    var date = dateOfFirstTargetDayOfMonth

    if (week == MeetupSchedule.TEENTH) {
      date = if (date > 5) date + 7 else date + 14
    } else if (week == MeetupSchedule.SECOND) {
      date += 7
    } else if (week == MeetupSchedule.THIRD) {
      date += 14
    } else if (week == MeetupSchedule.FOURTH) {
      date += 21
    } else if (week == MeetupSchedule.LAST) {
      // handle leap years
      if (this.month == 2 && isLeapYear(this.year)) {
        date = if (date == 1) 29 else date + 21
      } else {
        date = if (date + 28 <= DAYS_IN_MONTH[this.month]) date + 28 else date + 21
      }
    }
    return LocalDate.of(this.year, this.month, date)
  }

  private fun isLeapYear(year: Int): Boolean {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
  }
}