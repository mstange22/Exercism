#include "gigasecond.h"

using namespace boost::posix_time;

ptime gigasecond::advance(const ptime age) {
  return age + seconds(1000*1000*1000);
};