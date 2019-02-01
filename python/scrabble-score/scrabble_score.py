def score(word: str) -> int:
  word_map = {
    1: 'AEIOULNRST',
    2: 'DG',
    3: 'BCMP',
    4: 'FHVWY',
    5: 'K',
    8: 'JX',
    10: 'QZ',
  }

  new_map = {}

  for key in word_map:
    for c in word_map[key]:
      new_map[c] = key

  return sum(new_map[c] for c in word.upper())