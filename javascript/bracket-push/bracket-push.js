export const bracketPush = (s) => {
  const stack = [];
  const brackets = { '[': ']', '{': '}', '(': ')' };

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (Object.keys(brackets).includes(c)) {
      stack.push(brackets[c]);
    } else if (stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
};
