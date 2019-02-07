#include "phone_number.h"

phone_number::phone_number(std::string s) {
  for (size_t i = 0; i < s.length(); i++) {
    if (isdigit(s[i])) {
      num += s[i];
    }
  }
  if (num.length() != 10) {
    if (num.length() == 11 && num[0] == '1') {
      num = num.substr(1);
    } else {
      num = "0000000000";
    }
  }
}

std::string phone_number::number() const {
  return num;
}

std::string phone_number::area_code() const {
  return num.substr(0, 3);
}

phone_number::operator std::string() const {
  return "(" + num.substr(0,3) + ") " + num.substr(3,3) + "-" + num.substr(6);
}

phone_number phone(std::string s) {
  const phone_number p = phone_number(s);
  return p;
}