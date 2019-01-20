def is_isogram(string):
  m = {}
  for char in string:
    if char.isalnum():
      if char.lower() in m:
        return False
      m[char.lower()] = True
  return True