def verify(isbn):
  num = list(isbn.replace('-', ''))

  if len(num) != 10:
    return False

  if num[9] == 'X':
    num[9] = '10'

  sum = 0

  for i, digit in enumerate(num):
    try:
      sum += (int(digit) * (10 - i))
    except ValueError:
      return False

  return sum % 11 == 0