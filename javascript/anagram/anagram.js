const sorted = word => word.split('').sort().join('');

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  isAnagram(candidate) {
    return candidate !== this.word && sorted(candidate) === sorted(this.word);
  }

  matches(candidates) {
    return candidates.filter(c => this.isAnagram(c.toLowerCase(), this.word));
  }
}

export default Anagram;
