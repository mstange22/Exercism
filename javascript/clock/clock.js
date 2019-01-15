class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  plus(minutes) {
    this.minutes += minutes;
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    return this;
  }

  equals(clock) {
    clock.hours += Math.trunc((clock.minutes - this.minutes) / 60);
    return (clock.hours - this.hours) % 24 === 0 && (clock.minutes - this.minutes) % 60 === 0;
  }

  toString() {
    let minutes = this.minutes;
    let hours = this.hours;

    // add hours for negative minutess or minutes > 60
    const extraHours = Math.trunc(minutes / 60);
    hours += minutes >= 0 ? extraHours : extraHours - 1;

    // mod for multiples, handle negatives by adding max, then mod again to truncate
    minutes = ((minutes % 60) + 60) % 60;
    hours = ((hours % 24) + 24) % 24;

    // pad numbers with 0 if only one digit
    if (hours.toString().length === 1) hours = '0' + hours;
    if (minutes.toString().length === 1) minutes = '0' + minutes;
    return `${hours}:${minutes}`;
  }
}

const at = (hours = 0, minutes = 0) => new Clock(hours, minutes);

export default at;