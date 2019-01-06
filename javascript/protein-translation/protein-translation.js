const codons = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
  'UUA': 'Leucine', 'UUG': 'Leucine',
  'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
  'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
  'UGU': 'Cysteine', 'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP',
}

export default (s = '') => {
  const proteins = [];
  for (let i = 0; i < s.length - 2; i += 3) {
    const protein = s.slice(i, i + 3);
    if (codons[protein] === 'STOP') break;
    if (!codons[protein]) throw new Error('Invalid codon');
    proteins.push(codons[protein]);
  }
  return proteins;
};