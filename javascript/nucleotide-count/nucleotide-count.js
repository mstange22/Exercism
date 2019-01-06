const NucleotideCounts = {
  parse: (s) => {
    const res = [...s].reduce((accum, char) => {
      if (!char.match(/^[ACTG]$/)) {
        throw new Error('Invalid nucleotide in strand');
      }
      if (char === 'A') accum[0]++;
      else if (char === 'C') accum[1]++;
      else if (char === 'G') accum[2]++;
      else accum[3]++;
      return accum;
    }, [0, 0, 0, 0]);

    return res.join(' ');
  }
}
export default NucleotideCounts;