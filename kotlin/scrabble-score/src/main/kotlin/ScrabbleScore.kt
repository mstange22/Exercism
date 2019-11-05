val scrabbleMap = mapOf(1 to "AEIOULNRST", 2 to "DG", 3 to "BCMP", 4 to "FHVWY", 5 to "K", 8 to "JX", 10 to "QZ")

object ScrabbleScore {
  fun scoreWord(word: String): Int {

    return word.toUpperCase().map {
      when (it) {
        in scrabbleMap[1]!! -> 1
        in scrabbleMap[2]!! -> 2
        in scrabbleMap[3]!! -> 3
        in scrabbleMap[4]!! -> 4
        in scrabbleMap[5]!! -> 5
        in scrabbleMap[8]!! -> 8
        else -> 10
      }
    }.sum()
  }
}