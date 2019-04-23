import math

def normalize_text(text):
  return ''.join([c for c in list(text.lower()) if c.isalnum()])

def encode(plain_text):
  text = normalize_text(plain_text)
  print(text)
  size = math.floor(math.sqrt(len(text)))
  print(size)

  # get segments
  segments = []
  segment = ''
  for i, c in enumerate(text):
    segment += c
    if (i % (size + 1)) == size:
      segments.append(segment)
      segment = ''
  
  if len(segment) > 0:
    segments.append(segment)

  print(segments)

  cipher_text = []
  curr_segment = ''
  i = 0
  for pos in range(size + 1):
    for s in range(len(segments)):
      if i == size:
        cipher_text.append(curr_segment)
        curr_segment = ''
        i = 0
      if pos < len(segments[s]):
        curr_segment += segments[s][pos]
      else:
        curr_segment += ' '
      i += 1
  if len(curr_segment) > 0:
    cipher_text.append(curr_segment)
  print(cipher_text)
  return ' '.join(cipher_text)