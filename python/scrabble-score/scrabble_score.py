def score(word: str) -> int:
  word_map = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
  }

  new_map = {}

  for key in word_map:
    for c in key:
      new_map[c] = word_map[key]

  return sum(new_map[c] for c in word.upper())