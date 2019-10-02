parts = [[],
  ['house that Jack built', ''],
  ['malt', 'lay in'],
  ['rat', 'ate'],
  ['cat', 'killed'],
  ['dog', 'worried'],
  ['cow with the crumpled horn', 'tossed'],
  ['maiden all forlorn', 'milked'],
  ['man all tattered and torn', 'kissed'],
  ['priest all shaven and shorn', 'married'],
  ['rooster that crowed in the morn', 'woke'],
  ['farmer sowing his corn', 'kept'],
  ['horse and the hound and the horn', 'belonged to']
]

def recite(start_verse, end_verse):
  res = []
  for i in range(start_verse, end_verse + 1):
    verse = [f'This is the {parts[i][0]}']
    for j in range(i, 1, -1):
      verse.append(f' that {parts[j][1]} the {parts[j - 1][0]}')
    res.append(''.join(verse) + '.')
  return res