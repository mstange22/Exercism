import math

def normalize_text(text):
  return ''.join([c for c in list(text.lower()) if c.isalnum()])

def encode(plain_text):
  normalized_text = normalize_text(plain_text)
  segment_length = int(math.ceil(math.sqrt(len(normalized_text))))

  segments = []
  normalized_segment = ''
  for i, c in enumerate(normalized_text):
    normalized_segment += c
    if i % segment_length == segment_length - 1:
      segments.append(normalized_segment)
      normalized_segment = ''
  if len(normalized_segment) > 0:
    segments.append(normalized_segment)

  cipher_text = []
  for char_pos in range(segment_length):
    cipher_segment = ''
    for i, segment in enumerate(segments):
      cipher_segment += segment[char_pos] if len(segment) > char_pos else ' '
    cipher_text.append(cipher_segment)
  return ' '.join(cipher_text)