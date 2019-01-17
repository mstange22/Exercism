def distance(strand_a, strand_b):
  if len(strand_a) != len(strand_b):
    raise ValueError('Strand lengths must be equal.')

  return sum(1 if strand_a[i] != strand_b[i] else 0 for i in range(len(strand_a)))
