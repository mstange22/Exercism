def normalize_text(text):
  return ''.join([c for c in list(text.lower()) if c.isalpha()])

def encode(plain_text):
  res = []
  text = normalize_text(plain_text)
  print(text)
  rows , cols = divmod(len(text), len(text) ** (1/2))
  if cols == 0:
    cols = int(rows)
  else:
    cols = int(rows + 1)
  rows = int(rows)
  print(cols, rows)

  normalized = []
  row = ''
  for i, char in enumerate(text):
    row += char
    if i % cols == rows:
      normalized.append(row)
      row = ''
  
  while len(row) < cols:
    row += ' '
  normalized.append(row)
  # print(normalized)
  count = 0
  for i in range(cols):
    for j in range(rows):
      if count % cols == rows:
        res.append(' ')
        count += 1
      res.append(normalized[j][i])
      # print('count:', count)
      # print('count % rows:', count % rows)
      count += 1
  return ''.join(res)
  