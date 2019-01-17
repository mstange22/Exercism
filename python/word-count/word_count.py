from collections import Counter
import re

def word_count(phrase):
  return Counter(word for word in re.findall(r'([a-z]+\'{1}[a-z]+|[a-z0-9]+)', phrase.lower()))
