import java.util.Map;
import java.util.HashMap;

class NucleotideCounter {
  private Map<Character, Integer> hm = new HashMap<Character, Integer>();

  NucleotideCounter(String s) {
    hm.put('A', 0);
    hm.put('C', 0);
    hm.put('G', 0);
    hm.put('T', 0);
    for (char c : s.toCharArray()) {
      if (!hm.containsKey(c)) {
        throw new IllegalArgumentException("Error: Invalid nucleotide");
      }
      int count = hm.get(c);
      hm.put(c, count + 1);
    }
  }

  Map<Character, Integer> nucleotideCounts() {
    return hm;
  }
}