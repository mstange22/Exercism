package Luhn

fun isValid(s: String): Boolean {
  if (s.trim().length == 1) {
    return false
  }
  var sum = 0
  var counter = 0

  for (i in s.lastIndex downTo 0) {
    if (s[i].isDigit()) {
      var digit: Int = s[i].toInt() - '0'.toInt()
      counter += 1
      if (counter % 2 == 0) {
        val doubled = digit * 2
        sum += if (doubled > 9) doubled - 9 else doubled
      } else {
        sum += digit
      }
    } else if (s[i] != ' ') {
      return false
    }
  }
  return sum % 10 == 0
}