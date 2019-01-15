def isAnagram(w1, w2):
  if len(w1) != len(w2) or w1 == w2:
    return False
  for i in w1:
    if i not in w2:
      return False
    w2 = w2.replace(i, '', 1)
  return len(w2) == 0

def find_anagrams(word, candidates):
  return [c for c in candidates if isAnagram(word.lower(), c.lower())]