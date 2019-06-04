class RunLengthEncoding {
  String encode(String s) {
    int count = 0;
    StringBuilder res = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char currChar = s.charAt(i);
      count++;
      if (i == s.length() - 1 || currChar != s.charAt(i + 1)) {
        if (count != 1) {
          res.append(Integer.toString(count));
        }
        res.append(currChar);
        count = 0;
      }
    }
    return res.toString();
  }

  String decode(String s) {
    StringBuilder res = new StringBuilder();
    String count = "";
    for (int i = 0; i < s.length(); i++) {
      char currChar = s.charAt(i);
      if (currChar >= '0' && currChar <= '9') {
        count += currChar;
      } else {
        int intCount;
        if (count.length() > 0) {
          intCount = (Integer.parseInt(count));
        } else {
          intCount = 1;
        }
        for (int j = 0; j < intCount; j++) {
          res.append(currChar);
        }
        count = "";
      }
    }
    return res.toString();
  }
}