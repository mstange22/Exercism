COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

def value(colors):
  return int(''.join(COLORS.index(color) for color in colors))
