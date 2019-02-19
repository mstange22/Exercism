class Bob {
  String hey(String input) {
    String trimmed = input.trim();
    System.out.println(trimmed);
    if (trimmed.length() == 0) {
      return "Fine. Be that way!";
    }
    if (trimmed.matches(".*[a-zA-Z]+.*") && trimmed.toUpperCase().equals(trimmed)) {
      if (trimmed.endsWith("?")) {
        return "Calm down, I know what I'm doing!";
      }
      return "Whoa, chill out!";
    }
    if (trimmed.endsWith("?")) {
      return "Sure.";
    }
    return "Whatever.";
  }
}
