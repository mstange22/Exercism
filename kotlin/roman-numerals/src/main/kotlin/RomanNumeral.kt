package RomanNumeral

var romanMap = linkedMapOf(
  1000 to 'M', 900 to "CM", 500 to "D", 400 to "CD", 100 to "C", 90 to "XC",
  50 to "L", 40 to "XL", 10 to "X", 9 to "IX", 5 to "V", 4 to "IV", 1 to "I"
)

fun value(input: Int): String {
  var roman = StringBuilder()
  var number = input

  for ((key, value) in romanMap) {
    while (number >= key) {
      roman.append(value)
      number -= key
    }
  }
  return roman.toString()
}