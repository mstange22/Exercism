#include "say.h"
#include <stdexcept>

string say::convert_teens(const unsigned long long num) {
    if (num == 11) return "eleven";
    if (num == 12) return "twelve";
    if (num == 13) return "thirteen";
    if (num == 14) return "fourteen";
    if (num == 15) return "fifteen";
    if (num == 16) return "sixteen";
    if (num == 17) return "seventeen";
    if (num == 18) return "eighteen";
    return "nineteen";
}

string say::convert_ones(const unsigned long long num) {
  int ones = num % 10;
  if (ones == 9) return "nine";
  if (ones == 8) return "eight";
  if (ones == 7) return "seven";
  if (ones == 6) return "six";
  if (ones == 5) return "five";
  if (ones == 4) return "four";
  if (ones == 3) return "three";
  if (ones == 2) return "two";
  if (ones == 1) return "one";
  return "";
}

string say::convert_tens(const unsigned long long num) {
    int tens = num / 10;
    if (tens == 9) return "ninety";
    if (tens == 9) return "ninety";
    if (tens == 8) return "eighty";
    if (tens == 7) return "seventy";
    if (tens == 6) return "sixty";
    if (tens == 5) return "fifty";
    if (tens == 4) return "forty";
    if (tens == 3) return "thirty";
    if (tens == 2) return "twenty";
    if (tens == 1) return "ten";
    return "";
}

string say::convert_hundred(const unsigned long long num) {
  // teens
  if (num >= 11 && num <= 19) return convert_teens(num);
  // ones
  if (num >= 1 && num <= 9) return convert_ones(num);
  // tens
  return convert_tens(num) + (num % 10 == 0 ? "" : "-" + convert_ones(num));
}

string say::convert_thousand(unsigned long long num) {
  string return_string;
  // hundreds
  if (num >= 100) {
    return_string += (convert_ones(num / 100) + " hundred" + (num % 100 == 0 ? "" : " "));
    num %= 100;
  }
  // last hundred
  return return_string + convert_hundred(num);
}

string say::in_english(unsigned long long num) {
  if (num < 0 || num >= 1000ULL*1000ULL*1000ULL*1000ULL) throw domain_error("domain error");
  if (num == 0) return "zero";
  string return_string = "";
  // billions
  if (num >= 1000*1000*1000) {
    return_string += (convert_thousand(num / (1000*1000*1000)) + " billion" + (num % (1000*1000*1000) == 0 ? "" : " "));
    num %= 1000000000;
  }
  // millions
  if (num >= 1000*1000) {
    return_string += (convert_thousand(num / (1000*1000)) + " million" + (num % (1000*1000) == 0 ? "" : " "));
    num %= 1000000;
  }
  // thousands
  if (num >= 1000) {
    return_string += (convert_thousand(num / 1000) + " thousand" + (num % 1000 == 0 ? "" : " "));
    num %= 1000;
  }
  // last thousand
  return return_string + convert_thousand(num);
}