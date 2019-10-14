func toLimit(_ limit: Int, inMultiples: [Int]) -> Int {
  var multiples = Set<Int>()
  var sum = 0

  for n in inMultiples {
    var i = 1
    while n > 0 && n * i < limit {
      multiples.insert(n * i)
      i += 1
    }
  }

  for multiple in multiples {
    sum += multiple
  }
  return sum
}
