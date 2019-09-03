class Anagram {
  List word;

  bool isAnagram(String candidate) {
    if (candidate.length != this.word.length) {
      return false;
    }
    List<String> c = candidate.split('');
    c.sort();
    for (int i = 0; i < c.length; i++) {
      if (c[i] != this.word[i]) {
        return false;
      }
    }
    return true;
  }

  List<String> findAnagrams(String word, List<String> candidates) {
    List<String> res = [];
    String lowerWord = word.toLowerCase();
    this.word = lowerWord.split('');
    this.word.sort();
    candidates.forEach((c) => lowerWord != c.toLowerCase() && isAnagram(c.toLowerCase()) ? res.add(c) : null);
    return res;
  }
}
