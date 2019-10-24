package ScrabbleScore

val scrabbleMap = mapOf(1 to "AEIOULNRST", 2 to "DG", 3 to "BCMP", 4 to "FHVWY", 5 to "K", 8 to "JX", 10 to "QZ")

fun scoreWord(word: String): Int {
  var score = 0

  // derive one-to-one map for constant time lookup
  var derivedMap = mutableMapOf<Char, Int>()
  for ((key, value) in scrabbleMap.entries) {
    for (letter in value) {
      derivedMap[letter] = key
    }
  }

  for (letter in word.toUpperCase()) {
    if (derivedMap.containsKey(letter)) {
      score += derivedMap[letter]!!;
    }
  }
  return score
}