def convert(char, key):
  shift = ((ord(char.upper()) - ord('A') + key) % 26) + ord('A') - ord(char.upper())
  return chr(ord(char) + shift)

def rotate(text, key):
  return ''.join([convert(char, key) if char.isalpha() else char for char in list(text)])