from collections import Counter
import re

def word_count(phrase):
  return Counter(re.findall(r'([a-z]+\'{1}[a-z]+|[a-z0-9]+)', phrase.lower()))
