class Diamond {
  String getSpaces(int spaceCount) {
    var spaces = '';
    for (var i = 0; i < spaceCount; i++) {
      spaces += ' ';
    }
    return spaces;
  }

  List<String> rows(String letter) {
    List<String> res = [];
    var diff = letter.codeUnitAt(0) - 'A'.codeUnitAt(0);
    var outerSpacesCount = diff;
    var currentLetter = 'A';

    for (var i = 0; i <= 2 * diff; i++) {
      if (currentLetter == 'A') {
        res.add('${getSpaces(outerSpacesCount)}A${getSpaces(outerSpacesCount)}');
      } else if (currentLetter == letter) {
        // add the middle line
        res.add('$letter${getSpaces((2 * diff) - 1)}$letter');
      } else {
        // add the other lines
        var innerSpacesCount = (2 * diff) - (outerSpacesCount * 2) - 1;
        var innerSpaces = getSpaces(innerSpacesCount);
        var outerSpaces = getSpaces(outerSpacesCount);
        res.add('$outerSpaces$currentLetter$innerSpaces$currentLetter$outerSpaces');
      }
      // update outerSpacesCount & currentLetter
      if (i < diff) {
        outerSpacesCount--;
        currentLetter = String.fromCharCode(currentLetter.codeUnitAt(0) + 1);
      } else {
        outerSpacesCount++;
        currentLetter = String.fromCharCode(currentLetter.codeUnitAt(0) - 1);
      }
    }
    return res;
  }
}