ONES = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
TEENS = { 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }
TENS = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' }
BIG_NUMS = { 1e9: 'billion', 1e6: 'million', 1000: 'thousand', 100: 'hundred' }

def say(n):
  if n < 0 or n >= 1e12:
    raise ValueError('n must be between 0 and 999,999,999,999.')
  if n == 0:
    return 'zero'
  if n >= 11 and n <= 19:
    return TEENS[n]
  if n >= 1 and n <= 9:
    return ONES[n]

  res = ''

  for key in BIG_NUMS:
    if n >= key:
      res += f'{say(n // key)} {BIG_NUMS[key]}{"" if n % (key) == 0 else " "}'
      n %= key
      if key == 100 and n > 0: res += 'and '
  
  (tens, ones) = divmod(n, 10)
  return res + (TENS[tens] if tens >= 1 else '') + ('' if ones == 0 else f'-{ONES[ones]}')
