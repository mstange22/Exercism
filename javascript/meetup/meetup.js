const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// helper to determine if leap year (not necessary)
const isLeapYear = year => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

export const meetupDay = (year, month, day, desc) => {
  // find date of first occurrence of day
  const targetDayIndex = days.indexOf(day);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const firstTargetDayDate = targetDayIndex >= firstDayOfMonth ? 
    targetDayIndex - firstDayOfMonth + 1 : 7 - firstDayOfMonth + targetDayIndex + 1;

  // set days in February (not necessary)
  if (month === 1) daysInMonth[1] = isLeapYear(year) ? 29 : 28;

  // set variable teenth and last
  const teenth = firstTargetDayDate >= 6 ?
    firstTargetDayDate + 7 : firstTargetDayDate + 14;
  const last = daysInMonth[month] - firstTargetDayDate >= 28 ?
    firstTargetDayDate + 28 : firstTargetDayDate + 21;

  switch (desc) {
    case '1st':
      return new Date(year, month, firstTargetDayDate);
    case '2nd':
      return new Date(year, month, firstTargetDayDate + 7);
    case '3rd':
      return new Date(year, month, firstTargetDayDate + 14);
    case '4th':
      return new Date(year, month, firstTargetDayDate + 21);
    case '5th':
      if (firstTargetDayDate + 28 > daysInMonth[month]) throw 'Error: nonexistent fifth day';
      return new Date(year, month, firstTargetDayDate + 28);
    case 'last':
      return new Date(year, month, last);
    case 'teenth':
      return new Date(year, month, teenth);
    default:
      return null;
  }
};