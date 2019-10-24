class LargestSeries(val s: String) {
  init {
    require(s.all { it.isDigit() })
  }

  fun getLargestProduct(length: Int): Int {
    require(length >= 0 && length <= this.s.length)
    var largest = 0
    for (i in 0..s.length - length) {
      var prod = 1
      for (j in i..(i + length - 1)) {
        prod *= s[j].toInt() - '0'.toInt()
      }
      if (prod > largest) {
        largest = prod
      }
    }

    return largest
  }
}