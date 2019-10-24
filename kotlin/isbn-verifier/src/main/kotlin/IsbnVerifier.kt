class IsbnVerifier {
  fun isValid(s: String): Boolean {
    var sum = 0
    val stripped = Regex("""[^0-9X]""").replace(s.toUpperCase(), "")
    if (stripped.length < 10) {
      return false
    }
    for (i in 0..stripped.lastIndex) {
      if (stripped[i] == 'X') {
        if (i != stripped.lastIndex) {
          return false
        }
        sum += 10
      } else {
        sum += (stripped[i].toInt() - '0'.toInt()) * (10 - i)
      }
    }
    return sum % 11 == 0
  }
}