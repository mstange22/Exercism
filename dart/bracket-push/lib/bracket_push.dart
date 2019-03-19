class BracketPush {
  bool isPaired(String s) {
    List<String> stack = [];
    Map<String, String> brackets = { '{': '}', '[': ']', '(': ')' };
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (brackets.containsKey(c)) {
        stack.add(brackets[c]);
      } else if (brackets.containsValue(c)) {
        if (stack.removeLast() != c) {
          return false;
        }
      }
    }
    return stack.length == 0;
  }
}
