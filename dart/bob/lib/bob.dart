class Bob {
  String response(String input) {
    input = input.trim();
    if (input == '') {
      return 'Fine. Be that way!';
    }
    if (input.endsWith('?')) {
      if (isYelling(input)) {
        return 'Calm down, I know what I\'m doing!';
      }
      return 'Sure.';
    }
    if (isYelling(input)) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
}

bool isYelling(String s) {
  return s.toUpperCase() == s && s.contains(new RegExp(r'[A-Z]'));
}