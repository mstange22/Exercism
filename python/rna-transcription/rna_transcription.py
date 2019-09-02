def to_rna(s):
  m = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }
  return ''.join([m[c] for c in s])