export const bracketPush = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // push any open bracket onto stack
    if (/[\({\[]/.test(s[i])) {
      stack.push(s[i]);
    } else {
      const top = stack[stack.length - 1];
      // if any closing bracket does not match top of stack, return false
      if ((s[i] === ')' && top !== '(') || (s[i] === '}' && top !== '{') || (s[i] === ']' && top !== '[')) {
        return false;
      } else {
        // closing bracket matches top, pop off match
        stack.pop();
      }
    }
  }
  // if stack is empty when done, return true.  Else false.
  return stack.length === 0;
}