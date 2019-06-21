class Atbash {

  String encode(String s) {

    StringBuilder res = new StringBuilder();
    int counter = 0;

    s = s.toLowerCase().replaceAll("[^0-9a-z]", "");

    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (Character.isDigit(c)) {
        res.append(c);
      } else {
        res.append((char)((int)'z' - ((int)s.charAt(i) - (int)'a')));
      }
      counter++;
      if (counter % 6 == 5) {
        res.append(' ');
        counter++;
      }
    }
    return res.toString().trim();
  }

  String decode(String s) {
    StringBuilder res = new StringBuilder();
    s = s.toLowerCase().replaceAll(" ", "");
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (Character.isDigit(c)) {
        res.append(c);
      } else {
        res.append((char)((int)'z' - ((int)s.charAt(i) - (int)'a')));
      }
    }
    return res.toString();
  }
}