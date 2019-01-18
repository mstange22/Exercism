class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  isAnagram(testWord) {
    if (testWord.length !== this.word.length || testWord === this.word) return false;
    return this.word.split('').sort().join('') === testWord.split('').sort().join('');
  }

  matches(list) {
    return list.reduce((res, word) => this.isAnagram(word.toLowerCase()) ? [...res, word] : res, []);
  }
}

export default Anagram;