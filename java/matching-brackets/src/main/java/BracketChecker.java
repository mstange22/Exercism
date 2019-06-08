import java.util.Map;
import java.util.Stack;
import java.util.HashMap;

@SuppressWarnings("serial")
class BracketChecker {
  private final String brackets;

  BracketChecker(String brackets) {
    this.brackets = brackets;
  }

  boolean areBracketsMatchedAndNestedCorrectly() {
    Map<String, String> bracketMap = new HashMap<String, String>() {
      {
        put("[", "]");
        put("{", "}");
        put("(", ")");
      }
    };

    Stack<String> stack = new Stack<>();

    for (String bracket : brackets.split("")) {
      if (bracketMap.containsKey(bracket)) {
        stack.push(bracketMap.get(bracket));
      } else if (bracketMap.containsValue(bracket)) {
        if (stack.empty() || !stack.pop().equals(bracket)) {
          return false;
        }
      }
    }
    return stack.empty();
  }
}