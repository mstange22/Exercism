ONES = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
  6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
}

TEENS = {
  11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
  16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
}

TENS = {
  1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
  6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
}

def convert_ones(n):
  ones = n % 10
  return ONES[ones] if ones >= 1 and ones <= 9 else ''

def convert_tens(n):
  tens = n // 10
  return TENS[tens] if tens >= 1 else ''

def convert_hundred(n):
  if n >= 11 and n <= 19:
    return TEENS[n]
  if n >= 1 and n <= 9:
    return ONES[n]
  return convert_tens(n) + ('' if n % 10 == 0 else '-') + convert_ones(n)

def convert_thousand(n):
  res = ''
  if n >= 100:
    res += convert_ones(n // 100) + ' hundred' + ('' if n % 100 == 0 else ' and ')
    n %= 100
  return res + convert_hundred(n)

def say(number):
  if number < 0 or number >= 1e12:
    raise ValueError('Number must be between 0 and 999,999,999,999.')
  if number == 0:
    return 'zero'

  res = ''
  
  # billions
  if number >= 1e9:
    res += convert_thousand(number // (1e9)) + ' billion' + ('' if number % (1e9) == 0 else ' ')
    number %= 1e9

  # millions
  if number >= 1e6:
    res += convert_thousand(number // 1e6) + ' million' + ('' if number % 1e6 == 0 else ' ')
    number %= 1e6
  
  # thousands
  if number >= 1000:
    res += convert_thousand(number // 1000) + ' thousand' + ('' if number % 1000 == 0  else ' ')
    number %= 1000

  # last thousand
  return res + convert_thousand(number)
