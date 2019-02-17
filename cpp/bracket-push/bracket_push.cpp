#include "bracket_push.h"
#include <vector>

bool bracket_push::check(std::string brackets) {
  std::vector<char> stack;
  for (size_t i = 0; i < brackets.length(); i++) {
    char c = brackets[i];
    if (c == '[') {
      stack.push_back(']');
    } else if (c == '{') {
      stack.push_back('}');
    } else if (c == '(') {
      stack.push_back(')');
    } else if (c == ']' || c == '}' || c == ')') {
      if (stack.size() == 0 || stack[stack.size()-1] != c) {
        return false;
      }
      stack.pop_back();
    }
  }
  return stack.size() == 0;
}