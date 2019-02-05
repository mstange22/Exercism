class PigLatinTranslator {
  String translate(String phrase) {

    StringBuilder translatedWords = new StringBuilder();
    
    for (String word : phrase.split(" ")) {
      // if word starts with vowel or "yt" or "xr" append "ay"
      if (isVowel(word.charAt(0)) || word.substring(0, 2).equals("yt") || word.substring(0,2).equals("xr")) {
        translatedWords.append(word + "ay" + " ");
      } else {
        // find first consonant group and position of first vowel (or nonleading y).
        StringBuilder consonant = new StringBuilder();
        int pos = 0;
        for (int i = 0; !isVowel(word.charAt(i)) && (i == 0 || word.charAt(i) != 'y') ; i++) {
          consonant.append(word.charAt(i));
          pos++;
        }
        // handle "qu" case
        if (word.charAt(pos - 1) == 'q' && word.charAt(pos) == 'u') {
          consonant.append('u');
          pos++;
        }
        // append translated word to StringBuilder
        translatedWords.append(word.substring(pos) + consonant.toString() + "ay" + " ");
      }
    }
    return translatedWords.toString().trim();
  }

  // helper function to check for vowels
  private boolean isVowel(char c) {
    String vowels = "aeiou";
    return vowels.indexOf(c) != -1;
  }
}