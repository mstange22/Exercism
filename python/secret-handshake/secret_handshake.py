codes = {
  'wink': 1,
  'double blink': 2,
  'close your eyes': 4,
  'jump': 8,
}

actions = {
  1: 'wink',
  2: 'double blink',
  4: 'close your eyes',
  8: 'jump',
}

def handshake(code):
  res = [actions[c] for c in [1, 2, 4, 8] if code & c]
  if code & 16:
    res.reverse()
  return res

def secret_code(actions):
  sum = 0
  is_reversed = False
  for i, action in enumerate(actions):
    if not is_reversed and i != len(actions) - 1 and codes[actions[i]] > codes[actions[i + 1]]:
      sum += 16
      is_reversed = True
    sum += codes[action] 
  return sum