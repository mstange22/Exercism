def is_paired(input_string):
  bracket_stack = []
  for char in input_string:
    # if opening bracket, add match to stack
    if char == '[':
      bracket_stack.append(']')
    elif char == '{':
      bracket_stack.append('}')
    elif char == '(':
      bracket_stack.append(')')
    elif char in ']})':
      # closing bracket without any brackets or unmatched
      if len(bracket_stack) == 0 or bracket_stack.pop() != char:
        return False
  # check if any brackets are still on stack
  return len(bracket_stack) == 0