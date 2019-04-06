def do_work(text, mode):
  res = []
  for c in text.lower():
    if c.isalpha() or c.isdigit():
      if len(res) % 6 == 5 and mode == 'encode':
        res.append(' ')
      if c.isalpha():
        res.append(chr(ord('z') - (ord(c) - ord('a'))))
      else:
        res.append(c)

  return ''.join(res)

def encode(plain_text):
  return do_work(plain_text, 'encode')

def decode(ciphered_text):
  return do_work(ciphered_text, 'decode')