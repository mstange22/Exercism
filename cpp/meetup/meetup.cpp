#include "meetup.h"

#define SUNDAY 0
#define MONDAY 1
#define TUESDAY 2
#define WEDNESDAY 3
#define THURSDAY 4
#define FRIDAY 5
#define SATURDAY 6

int days_in_month[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

meetup::scheduler::scheduler(int month, int year) {
  this_month = month;
  this_year = year;

  // get the day of week for the 1st of the month
  boost::gregorian::date first_day = { year, month, 1 };
  int first_day_of_month = first_day.day_of_week();

  // determine and store first occurrence of each day for this month
  first_monday_of_month = MONDAY >= first_day_of_month ? 
    MONDAY - first_day_of_month + 1 : 7 - first_day_of_month + MONDAY + 1;
  first_tuesday_of_month = TUESDAY >= first_day_of_month ? 
    TUESDAY - first_day_of_month + 1 : 7 - first_day_of_month + TUESDAY + 1;
  first_wednesday_of_month = WEDNESDAY >= first_day_of_month ? 
    WEDNESDAY - first_day_of_month + 1 : 7 - first_day_of_month + WEDNESDAY + 1;
  first_thursday_of_month = THURSDAY >= first_day_of_month ? 
    THURSDAY - first_day_of_month + 1 : 7 - first_day_of_month + THURSDAY + 1;
  first_friday_of_month = FRIDAY >= first_day_of_month ? 
    FRIDAY - first_day_of_month + 1 : 7 - first_day_of_month + FRIDAY + 1;
  first_saturday_of_month = SATURDAY >= first_day_of_month ? 
    SATURDAY - first_day_of_month + 1 : 7 - first_day_of_month + SATURDAY + 1;
  first_sunday_of_month = SUNDAY >= first_day_of_month ? 
    SUNDAY - first_day_of_month + 1 : 7 - first_day_of_month + SUNDAY + 1;
}

boost::gregorian::date meetup::scheduler::monteenth() const {
  return {
    this_year,
    this_month,
    first_monday_of_month >= 6 ? first_monday_of_month + 7 : first_monday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::tuesteenth() const {
  return {
    this_year,
    this_month,
    first_tuesday_of_month >= 6 ? first_tuesday_of_month + 7 : first_tuesday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::wednesteenth() const {
  return {
    this_year,
    this_month,
    first_wednesday_of_month  >= 6 ? first_wednesday_of_month + 7 : first_wednesday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::thursteenth() const {
  return {
    this_year,
    this_month,
    first_thursday_of_month >= 6 ? first_thursday_of_month + 7 : first_thursday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::friteenth() const {
  return {
    this_year,
    this_month,
    first_friday_of_month >= 6 ? first_friday_of_month + 7 : first_friday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::saturteenth() const {
  return {
    this_year,
    this_month,
    first_saturday_of_month >= 6 ? first_saturday_of_month + 7 : first_saturday_of_month + 14,
  };
}

boost::gregorian::date meetup::scheduler::sunteenth() const {
  return {
    this_year,
    this_month,
    first_sunday_of_month >= 6 ? first_sunday_of_month + 7 : first_sunday_of_month + 14,
  };
};


boost::gregorian::date meetup::scheduler::first_monday() const {
  return {this_year, this_month, first_monday_of_month};
};

boost::gregorian::date meetup::scheduler::first_tuesday() const {
  return {this_year, this_month, first_tuesday_of_month};
};

boost::gregorian::date meetup::scheduler::first_wednesday() const {
  return {this_year, this_month, first_wednesday_of_month};
};

boost::gregorian::date meetup::scheduler::first_thursday() const {
  return {this_year, this_month, first_thursday_of_month};
};

boost::gregorian::date meetup::scheduler::first_friday() const {
  return {this_year, this_month, first_friday_of_month};
};

boost::gregorian::date meetup::scheduler::first_saturday() const {
  return {this_year, this_month, first_saturday_of_month};
};

boost::gregorian::date meetup::scheduler::first_sunday() const {
  return {this_year, this_month, first_sunday_of_month};
};


boost::gregorian::date meetup::scheduler::second_monday() const {
  return {this_year, this_month, first_monday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_tuesday() const {
  return {this_year, this_month, first_tuesday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_wednesday() const {
  return {this_year, this_month, first_wednesday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_thursday() const {
  return {this_year, this_month, first_thursday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_friday() const {
  return {this_year, this_month, first_friday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_saturday() const {
  return {this_year, this_month, first_saturday_of_month + 7};
};

boost::gregorian::date meetup::scheduler::second_sunday() const {
  return {this_year, this_month, first_sunday_of_month + 7};
};


boost::gregorian::date meetup::scheduler::third_monday() const {
  return {this_year, this_month, first_monday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_tuesday() const {
  return {this_year, this_month, first_tuesday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_wednesday() const {
  return {this_year, this_month, first_wednesday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_thursday() const {
  return {this_year, this_month, first_thursday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_friday() const {
  return {this_year, this_month, first_friday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_saturday() const {
  return {this_year, this_month, first_saturday_of_month + 14};
};

boost::gregorian::date meetup::scheduler::third_sunday() const {
  return {this_year, this_month, first_sunday_of_month + 14};
};


boost::gregorian::date meetup::scheduler::fourth_monday() const {
  return {this_year, this_month, first_monday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_tuesday() const {
  return {this_year, this_month, first_tuesday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_wednesday() const {
  return {this_year, this_month, first_wednesday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_thursday() const {
  return {this_year, this_month, first_thursday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_friday() const {
  return {this_year, this_month, first_friday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_saturday() const {
  return {this_year, this_month, first_saturday_of_month + 21};
};

boost::gregorian::date meetup::scheduler::fourth_sunday() const {
  return {this_year, this_month, first_sunday_of_month + 21};
};


boost::gregorian::date meetup::scheduler::last_monday() const {
  int last = days_in_month[this_month-1] - first_monday_of_month >= 28 ?
    first_monday_of_month + 28 : first_monday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_tuesday() const {
  int last = days_in_month[this_month-1] - first_tuesday_of_month >= 28 ?
    first_tuesday_of_month + 28 : first_tuesday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_wednesday() const {
  int last = days_in_month[this_month-1] - first_wednesday_of_month >= 28 ?
    first_wednesday_of_month + 28 : first_wednesday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_thursday() const {
  int last = days_in_month[this_month-1] - first_thursday_of_month >= 28 ?
    first_thursday_of_month + 28 : first_thursday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_friday() const {
  int last = days_in_month[this_month-1] - first_friday_of_month >= 28 ?
    first_friday_of_month + 28 : first_friday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_saturday() const {
  int last = days_in_month[this_month-1] - first_saturday_of_month >= 28 ?
    first_saturday_of_month + 28 : first_saturday_of_month + 21;
  return {this_year, this_month, last};
};

boost::gregorian::date meetup::scheduler::last_sunday() const {
  int last = days_in_month[this_month-1] - first_sunday_of_month >= 28 ?
    first_sunday_of_month + 28 : first_sunday_of_month + 21;
  return {this_year, this_month, last};
};


