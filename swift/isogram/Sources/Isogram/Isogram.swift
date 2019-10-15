func isIsogram(_ s: String) -> Bool {
  var set = Set<Character>()

  for c in s.lowercased() {
    if c >= "a" && c <= "z" {
      if set.contains(c) {
        return false
      }
      set.insert(c)
    }
  }
  return true
}