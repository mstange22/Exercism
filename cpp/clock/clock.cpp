#include "clock.h"
#include <stdio.h>

date_independent::clock::clock(int min) : min_(min){}

date_independent::clock date_independent::clock::at(int h, int m) {
  int minutes = (h * 60 + m) % 1440;
  if (minutes < 0) {
    minutes += 1440;
  }
  return clock(minutes);
}

date_independent::clock::operator std::string() const {
  int hours = (min_ / 60) % 24;
  int minutes = min_ % 60;
  char res [5];
  sprintf(res, "%02d:%02d", hours, minutes);
  return res;
}

date_independent::clock date_independent::clock::plus(int min) {
  return at(0, min_ + min);
}

bool date_independent::clock::operator ==(date_independent::clock c) const {
  return std::string(c) == std::string(*this);
}

bool date_independent::clock::operator !=(date_independent::clock c) const {
  return std::string(c) != std::string(*this);
}