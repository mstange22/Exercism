class Anagram {
  var word: String

  constructor(word: String) {
    this.word = word.toLowerCase()
  }

  fun match(candidates: List<String>): Set<String> {
    return candidates.filter { isAnagram(it.toLowerCase())}
      .toSet()
  }

  private fun isAnagram(candidate: String): Boolean {
    return candidate != this.word &&
      candidate.toCharArray().sorted().joinToString("") == this.word.toCharArray().sorted().joinToString("")
  }
}