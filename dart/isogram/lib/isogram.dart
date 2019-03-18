class Isogram {
  bool isIsogram(String s) {
    var charsSeen = new Set<String>();
    var normalized = s.toLowerCase().replaceAll(RegExp('[ -]'), '');
    for (int i = 0; i < normalized.length; i++) {
      String char = normalized[i];
      if (charsSeen.contains(char)) return false;
      charsSeen.add(char);
    }
    return true;
  }
}
