func compute(_ strand: String, against: String) -> Int? {
  if strand.count != against.count {
    return nil
  }

  return zip(strand, against)
    .filter { $0 != $1 }
    .count
}