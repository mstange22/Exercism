class DiamondPrinter {
  fun printToList(c: Char): List<String> {
    var res = arrayListOf<String>()
    var letters = ('A'..c).toList()
    var lineLength = letters.size * 2 - 1

    // build top half
    for ((i, letter) in letters.withIndex()) {
      var outerSpacesCount = letters.size - 1 - i;
      var outer = " ".repeat(outerSpacesCount)
      if (letter == 'A') {
        res.add("$outer$letter$outer")
      } else {
        var innerSpacesCount = lineLength - (2 + (2 * outerSpacesCount))
        var inner = " ".repeat(innerSpacesCount)
        res.add("$outer$letter$inner$letter$outer")
      }
    }
    return res + res.reversed().slice(1..res.lastIndex)
  }
}