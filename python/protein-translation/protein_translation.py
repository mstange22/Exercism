def proteins(strand):
  m = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
    'UGU': 'Cysteine', 'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP',
  }
  proteins = []
  index = 0
  while index < len(strand) - 2:
    if m[strand[index:index+3]] == 'STOP':
      return proteins
    if m[strand[index:index+3]]:
      proteins.append(m[strand[index:index+3]])
    index += 3

  return proteins