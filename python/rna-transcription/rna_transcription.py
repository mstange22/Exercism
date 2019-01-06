def to_rna(dna_strand):
  rna_strand = ''
  for char in dna_strand:
    if char == 'G':
      rna_strand += 'C'
    elif char == 'C':
      rna_strand += 'G'
    elif char == 'T':
      rna_strand += 'A'
    else:
      rna_strand += 'U'
  
  return rna_strand
