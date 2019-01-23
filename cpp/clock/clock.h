#ifndef CLOCK_H
#define CLOCK_H

#include <string>

namespace date_independent {
  class clock {
    public:
      static clock at(int, int);
      clock plus(int);
      operator std::string() const;
      bool operator ==(clock) const;
      bool operator !=(clock) const;
    private:
      int min_;
      clock(int);
  };
}

#endif