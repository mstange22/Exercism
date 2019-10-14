class DNA {
  var map = [ "A": 0, "C": 0, "G": 0, "T": 0 ]
  init!(strand: String) {
    for c in Array(strand) {
      if map[String(c)] == nil {
        return nil
      }
      map[String(c)]! += 1
    }
  }

  func count(_ nucleotide: String) -> Int? {
    return map[nucleotide]
  }

  func counts() -> [String: Int] {
    return self.map
  }
}