package Bob

fun hey(s: String): String {
  var trimmed = s.trim();
  if (trimmed.isEmpty()) {
    return "Fine. Be that way!"
  }
  val regex = """[a-zA-Z]""".toRegex()
  if (trimmed.endsWith("?")) {
    if (regex.containsMatchIn(trimmed) && trimmed.toUpperCase() == trimmed) {
      return "Calm down, I know what I'm doing!"
    }
    return "Sure."
  }
  if (regex.containsMatchIn(trimmed) && trimmed.toUpperCase() == trimmed) {
    return "Whoa, chill out!"
  }
  return "Whatever."
}