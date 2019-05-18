class Anagram {
  _word: string;

  constructor(word: string) {
    this._word = word.toLowerCase();
  }

  isAnagram(candidate: string) {
    if (this._word === candidate) return false;
    return ([...candidate].sort().join('') === [...this._word].sort().join(''));
  }

  matches(...candidates: string[]) {
    return candidates.reduce((accum: string[], candidate) => {
      if (this.isAnagram(candidate.toLowerCase())) {
        accum.push(candidate);
      }
      return accum;
    }, []);
  }
}

export default Anagram;