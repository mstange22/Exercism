import java.util.Map;
import java.util.HashMap;

class WordCount {
  Map<String, Integer> phrase(String phrase) {
    Map<String, Integer> res = new HashMap<String, Integer>();
    for (String word : phrase.trim().split("[\\s,:]+")) {
      if (word.equals("")) {
        continue;
      }
      word = word.toLowerCase().replaceAll("[!&@$%^&\\.]+", "");
      // handle quotes
      if (word.charAt(0) == '\'') {
        word = word.substring(1, word.length() - 1);
      }
      // add word to map
      if (res.containsKey(word.toLowerCase())) {
        res.put(word, res.get(word) + 1);
      } else {
        res.put(word, 1);
      }
    }
    return res;
  }
}