package Isogram

fun isIsogram(s: String): Boolean {
  var set = HashSet<Char>()
  for (c in s.toLowerCase()) {
    if (c.isLetter()) {
      if (set.contains(c)) {
        return false
      }
      set.add(c)
    }
  }
  return true
}