def recite(start, take=1):
  res = []
  for i in range(start, start - take, -1):
    res += ((verse(i)) + [''])
  return res[:-1]

def verse(num):
  res = [f'{num_bottles(num)} of beer on the wall, {num_bottles(num).lower()} of beer.']
  # res1 = ''
  if num == 0:
    res += ['Go to the store and buy some more, ']
    new_bottles = 99
  else:
    pronoun = 'it' if num == 1 else 'one'
    res += [f'Take {pronoun} down and pass it around, ']
    new_bottles = num - 1
  res[1] += f'{num_bottles(new_bottles).lower()} of beer on the wall.'
  return res

def num_bottles(num):
  return ('No more' if num == 0 else str(num)) + (' bottle' if num == 1 else ' bottles')