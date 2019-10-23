class Dna(private val strand: String) {
  val nucleotideCounts = mutableMapOf('A' to 0, 'C' to 0, 'G' to 0, 'T' to 0)
  init {
    for (c in strand) {
      require(nucleotideCounts.containsKey(c)) { "" }
      nucleotideCounts[c] = nucleotideCounts.getOrDefault(c, 0) + 1
    }
  }
}