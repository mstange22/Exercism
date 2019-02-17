#include "beer_song.h"
#include <sstream>

std::string beer::verse(int n) {
  std::stringstream s;
  // handle oddball 0 case separately
  if (n == 0) {
    s << "No more bottles of beer on the wall, no more bottles of beer.\n";
    s << "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  } else {
    // first line
    std::string bottles = (n == 1 ? "1 bottle" : std::to_string(n) + " bottles");
    s << bottles << " of beer on the wall, " << bottles << " of beer.\n";
    // second line
    std::string object = (n == 1 ? "it" : "one");
    std::string remaining_bottles = (n == 1 ? "no more" : std::to_string(n - 1));
    std::string plurality = (n == 2 ? " bottle " : " bottles ");
    s << "Take " << object << " down and pass it around, " << remaining_bottles << plurality << "of beer on the wall.\n";
  }
  return s.str();
}

std::string beer::sing(int start, int end /*= 0 */) {
  std::string res = "";
  for (int i = start; i >= end; i--) {
    res += verse(i) + "\n";
  }
  return res.substr(0, res.length() - 1);
}