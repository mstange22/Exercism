SONG_PARTS = [ None,
  ['fly', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'],
  ['spider', 'It wriggled and jiggled and tickled inside her.'],
  ['bird', 'How absurd to swallow a bird!'],
  ['cat', 'Imagine that, to swallow a cat!'],
  ['dog', 'What a hog, to swallow a dog!'],
  ['goat', 'Just opened her throat and swallowed a goat!'],
  ['cow', 'I don\'t know how she swallowed a cow!'],
  ['horse', 'She\'s dead, of course!'],
]

# special cases
FLY = 1
SPIDER = 2
HORSE = 8

def verse(n):
  res = [f'I know an old lady who swallowed a {SONG_PARTS[n][0]}.']
  res.append(SONG_PARTS[n][1])

  # early exit if swallow horse
  if n == HORSE:
    return res

  for i in range(n, 0, -1):
    if i > FLY:
      reason = f'She swallowed the {SONG_PARTS[i][0]} to catch the {SONG_PARTS[i - 1][0]}'
      if i - 1 == SPIDER:
        # add wiggled and jiggled before period
        reason += ' that' + SONG_PARTS[SPIDER][1][2:-1]
      res.append(reason + '.')
    #add incredulity at end if not verse 1 (already handled)
    elif (n != FLY):
      res.append(SONG_PARTS[i][1])
  
  return res

def recite(start_verse, end_verse):
  res = []
  for i in range(start_verse, end_verse + 1):
    res += verse(i) + [""]
  return res[:-1]