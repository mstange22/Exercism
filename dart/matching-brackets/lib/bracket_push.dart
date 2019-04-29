class BracketPush {
  bool isPaired(String s) {
    List<String> brackets = []; 
    for (var i = 0; i < s.length; i++) {
      if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
        brackets.add(s[i]);
      } else if (s[i] == ')') {
        if (brackets.last == '(') {
          brackets.removeLast();
        } else {
          return false;
        }
      } else if (s[i] == ']') {
        if (brackets.last == '[') {
          brackets.removeLast();
        } else {
          return false;
        }
      } else if (s[i] == '}') {
        if (brackets.last == '{') {
          brackets.removeLast();
        } else {
          return false;
        }
      }
    }
    return brackets.length == 0;
  }
}
