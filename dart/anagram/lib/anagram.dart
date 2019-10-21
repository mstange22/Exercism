class Anagram {

  bool _isAnagram(List word, String candidate) {
    if (candidate.length != word.length) {
      return false;
    }
    List<String> c = candidate.split('');
    c.sort();
    for (int i = 0; i < c.length; i++) {
      if (c[i] != word[i]) {
        return false;
      }
    }
    return true;
  }

  List<String> findAnagrams(String word, List<String> candidates) {
    List<String> res = [];
    String lowerWord = word.toLowerCase();
    List<String> processedWord = word.toLowerCase().split('');
    processedWord.sort();
    candidates.forEach((c) => lowerWord != c.toLowerCase() && _isAnagram(processedWord, c.toLowerCase()) ? res.add(c) : null);
    return res;
  }
}
