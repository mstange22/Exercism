class WordProblemSolver {
  int solve(String input) {
    String[] tokens = input.substring(0, input.length() - 1).split(" ");
    try {
      int res = Integer.parseInt(tokens[2]);
      int i = 3;
      String op = "";
      while (i < tokens.length) {
        // looking for an op
        if (op.length() == 0) {
          op = tokens[i];
          if (op.equals("multiplied") || op.equals("divided")) {
            // move index past "by"
            i++;
          } else if (op.equals("raised")) {
            // move index past "to the"
            i += 2;
          } else if (!op.equals("plus") && !op.equals("minus")) {
            throw new Exception();
          }
        } else {
          // looking for a number
          switch (op) {
            case "plus":
              res += Integer.parseInt(tokens[i]);
              break;
            case "minus":
              res -= Integer.parseInt(tokens[i]);
              break;
            case "multiplied":
              res *= Integer.parseInt(tokens[i]);
              break;
            case "divided":
              res /= Integer.parseInt(tokens[i]);
              break;
            case "raised":
              // strip ordinal suffix
              int power = Integer.parseInt(tokens[i].substring(0, tokens[i].length() - 2));
              res = (int) Math.pow(res, power);
              // move index past "power"
              i++;
          }
          // clear op
          op = "";
        }
        i++;
      }
      return res;
    } catch(Exception e) {
      throw new IllegalArgumentException("I'm sorry, I don't understand the question!");
    }
  }
}