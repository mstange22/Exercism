import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

class Anagram {

  String _word;

  Anagram(String s) {
    _word = s.toLowerCase();
  }

  List<String> match(List<String> candidates) {
    List<String> matches = new ArrayList<String>();
    for (String candidate : candidates) {
      if (isAnagram(candidate.toLowerCase())) {
        matches.add(candidate);
      }
    }
    return matches;
  }

  boolean isAnagram(String s) {
    System.out.println("in isAnagram, " + s);
    if (s.length() != _word.length() || s.equals(_word)) {
      return false;
    }
    char[] _wordArray = _word.toCharArray();
    char[] sArray = s.toCharArray();
    Arrays.sort(_wordArray);
    Arrays.sort(sArray);
    return new String(_wordArray).equals(new String(sArray));
  }
}