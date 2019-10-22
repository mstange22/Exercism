val map = hashMapOf('C' to 'G', 'G' to 'C', 'A' to 'U', 'T' to 'A')

fun transcribeToRna(dna: String): String = dna.map {
  map[it]
}.joinToString("")