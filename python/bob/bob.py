import re

def hey(phrase):
  phrase = phrase.strip()
  if phrase == '':
    return 'Fine. Be that way!'
  if re.search('[a-zA-Z]', phrase) and phrase.isupper():
    if phrase.endswith('?'):
      return 'Calm down, I know what I\'m doing!'
    return 'Whoa, chill out!'
  if phrase.endswith('?'):
    return 'Sure.'
  return 'Whatever.'
  
