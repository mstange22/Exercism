def calculate(question):
  # remove 'what is', 'by', and trailing '?'
  query = question[:-1].replace(' by', '').split(' ')[2:]

  # validate expression length
  if len(query) < 3 and len(query) != 1: 
      raise ValueError('Invalid expression')

  # capture first operand
  res = int(query[0])

  # while there is more than just a digit in query
  # perform operation and concatenate result with remaining expression
  while len(query) > 1:
    if query[1] == 'plus':
      res += int(query[2])
    elif query[1] == 'minus':
      res -= int(query[2])
    elif query[1] == 'multiplied':
      res *= int(query[2])
    elif query[1] == 'divided':
      res /= int(query[2])
    else:
      raise ValueError('Invalid expression')

    query = [str(res)] + query[3:]
  
  return res