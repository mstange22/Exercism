package Series

fun slices(sliceLength: Int, s: String): List<List<Int>> {
  require(s.length >= sliceLength) { "Slice length is too large" }
  require(sliceLength >= 1) { "Slice length is too small" }
  
  var res = arrayListOf<List<Int>>()
  var intList = s.toCharArray().map({ it.toInt() - '0'.toInt() })

  for (i in 0..(intList.size - sliceLength)) {
    res.add(intList.slice(IntRange(i, i + sliceLength - 1)))
  }

  return res
}