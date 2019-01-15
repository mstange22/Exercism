import re
from collections import defaultdict

def word_count(phrase):
  word_map = defaultdict(int)
  for word in re.findall(r'([a-z]+\'{1}[a-z]+|[a-z0-9]+)', phrase.lower()):
      word_map[word] += 1
  return word_map