class WordCount {
    Map<String, int> countWords(String s) {
      Map<String, int> res = new Map<String, int>();
      List<String> words = s.split(new RegExp(r'[\s.,:!&@$%^&]+'));
      for (int i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        if (word.length >= 1) {
          if (word[0] == '\'' && word[word.length -1] == '\'') {
            word = word.substring(1, word.length - 1);
          }
          if (res.containsKey(word)) {
            res[word]++;
          } else {
            res[word] = 1;
          }
        }
      }
      return res;
    }
}
