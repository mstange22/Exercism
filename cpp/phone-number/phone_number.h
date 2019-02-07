#ifndef PHONE_NUMBER_H
#define PHONE_NUMBER_H

#include <string>

class phone_number {
  private:
    std::string num;
  public:
    phone_number(std::string);
    std::string number() const;
    std::string area_code() const;
    operator std::string() const;
};

#endif