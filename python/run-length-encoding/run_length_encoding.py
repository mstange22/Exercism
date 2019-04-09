def decode(string):
  res = []
  i = 0
  while i < len(string):
    char = string[i]
    if char.isdigit():
      num = char
      while string[i+1].isdigit():
        num += string[i+1]
        i += 1
      res.append(int(num) * string[i+1])
      i += 2
    else:
      res.append(char)
      i += 1
  
  return ''.join(res)


def encode(string):
  res = []
  count = 0
  for i, char in enumerate(string):
    count += 1
    if i == len(string) - 1 or char != string[i+1]:
      if count != 1:
        res.append(str(count))
      res.append(char)
      count = 0

  return ''.join(res)
