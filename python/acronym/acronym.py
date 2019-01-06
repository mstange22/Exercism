import re
def abbreviate(s):
  return ''.join(token[0].upper() for token in re.findall(r"[\w']+", s))