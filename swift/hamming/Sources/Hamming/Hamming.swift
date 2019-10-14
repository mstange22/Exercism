func compute(_ strand: String, against: String) -> Int? {
  if strand.count != against.count {
    return nil
  }
  let c1 = Array(strand)
  let c2 = Array(against)
  return c1.enumerated().map({(i, c) in c != c2[i] ? 1 : 0}).reduce(0, +)
}