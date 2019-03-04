SONG_PARTS = [ None,
  ['first'],
  ['second', 'two Turtle Doves, and '],
  ['third', 'three French Hens, '],
  ['fourth', 'four Calling Birds, '],
  ['fifth', 'five Gold Rings, '],
  ['sixth', 'six Geese-a-Laying, '],
  ['seventh', 'seven Swans-a-Swimming, '],
  ['eighth', 'eight Maids-a-Milking, '],
  ['ninth', 'nine Ladies Dancing, '],
  ['tenth', 'ten Lords-a-Leaping, '],
  ['eleventh', 'eleven Pipers Piping, '],
  ['twelfth', 'twelve Drummers Drumming, '],
]

def recite(start_verse, end_verse):
  song = []
  for verse in range(start_verse, end_verse + 1):
    res = f'On the {SONG_PARTS[verse][0]} day of Christmas my true love gave to me: '
    for num in range(verse, 1, -1):
      res += SONG_PARTS[num][1]
    song.append(res + 'a Partridge in a Pear Tree.')
  
  return song