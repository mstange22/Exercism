class Pangram {
  static String alpha = 'abcdefghijklmnopqrstuvwxyz';
  bool isPangram(String word) {
    word = word.toLowerCase();
    for (int i = 0; i < alpha.length; i++) {
      if (word.indexOf(alpha[i]) == -1) {
        return false;
      }
    }
    return true;
  }
}