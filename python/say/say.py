def convert_teens(n):
  if n == 11:
    return 'eleven'
  if n == 12:
    return 'twelve'
  if n == 13:
    return 'thirteen'
  if n == 14:
    return 'fourteen'
  if n == 15:
    return 'fifteen'
  if n == 16:
    return 'sixteen'
  if n == 17:
    return 'seventeen'
  if n == 18:
    return 'eighteen'
  return 'nineteen'

def convert_ones(n):
  ones = n % 10
  if ones == 9:
    return 'nine'
  if ones == 8:
    return 'eight'
  if ones == 7:
    return 'seven'
  if ones == 6:
    return 'six'
  if ones == 5:
    return 'five'
  if ones == 4:
    return 'four'
  if ones == 3:
    return 'three'
  if ones == 2:
    return 'two'
  if ones == 1:
    return 'one'
  return ''

def convert_tens(n):
  print('tens:', n)
  tens = n // 10
  if tens == 9:
    return 'ninety'
  if tens == 8:
    return 'eighty'
  if tens == 7:
    return 'seventy'
  if tens == 6:
    return 'sixty'
  if tens == 5:
    return 'fifty'
  if tens == 4:
    return 'forty'
  if tens == 3:
    return 'thirty'
  if tens == 2:
    return 'twenty'
  if tens == 1:
    return 'ten'
  return ''

def convert_hundred(n):
  # teens
  if n >= 11 and n <= 19:
    return convert_teens(n)
  # ones
  if n >= 1 and n <= 9:
    return convert_ones(n)
  # tens
  print('in hundreds:', n)
  return convert_tens(n) + ('' if n % 10 == 0 else '-') + convert_ones(n)

def convert_thousand(n):
  print('in thousand:', n)
  res = ''
  # hundreds
  if n >= 100:
    res += convert_ones(n // 100) + ' hundred' + ('' if n % 100 == 0 else ' and ')
    print('in thousand:', res)
    n %= 100
  
  # last hundred
  return res + convert_hundred(n)

def say(number):
  print('say:', number)
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
