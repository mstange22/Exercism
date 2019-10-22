package Hamming

fun compute(strand1: String, strand2: String): Int {
  if (strand1.length != strand2.length) {
    throw IllegalArgumentException("left and right strands must be of equal length.")
  }
  return strand1.zip(strand2).fold(0) { acc, (s1, s2) -> if (s1 != s2) acc + 1 else acc }
}