def is_pangram(sentence):
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  for char in alpha:
    if char not in sentence.lower():
      return False
  return True