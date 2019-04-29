class MatchingBrackets {
  bool isPaired(String s) {
    var bracket_map = { '{': '}', '[': ']', '(': ')' };
    List<String> stack = new List<String>();
    for (var c in s.split('')) {
      if (bracket_map.containsKey(c)) {
        stack.add(bracket_map[c]);
      } else if (bracket_map.values.contains(c)) {
        if (stack.length == 0 || stack.removeLast() != c) {
          return false;
        }
      }
    }
    return stack.length == 0;
  }
}