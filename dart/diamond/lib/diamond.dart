class Diamond {
  List<String> rows(String letter) {
    List<String> res = [];
    var diff = letter.codeUnitAt(0) - 'A'.codeUnitAt(0);
    var currentLetter = 'A';

    for (int i = 0; i <= diff; i++) {
      String outer = ' ' * (diff - i);
      String inner = ' ' * ((2 * (i - 1)) + 1);
      res.add(outer + currentLetter + inner + (i > 0 ? currentLetter : '') + outer);
      currentLetter = String.fromCharCode(currentLetter.codeUnitAt(0) + 1);
    }

    // Build remaining diamond by reflecting first half.
    for (int i = res.length - 2; i >= 0; i--) {
      res.add(res[i]);
    }
    return res;
  }
}