class WordCount {
    Map<String, int> countWords(String s) {
      Map<String, int> res = new Map<String, int>();
      List<String> words = s.toLowerCase().split(new RegExp(r'[\s.,:!&@$%^&]+'));
      for (var word in words) {
        if (word.length >= 1) {
          if (word[0] == '\'' && word[word.length -1] == '\'') {
            word = word.substring(1, word.length - 1);
          }
          res.containsKey(word) ? res[word]++ : res[word] = 1;
        }
      }
      return res;
    }
}
