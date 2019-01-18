class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  isAnagram(testWord) {
    return testWord !== this.word && this.word.split('').sort().join('') === testWord.split('').sort().join('');
  }

  matches(list) {
    return list.reduce((res, word) => this.isAnagram(word.toLowerCase()) ? [...res, word] : res, []);
  }
}

export default Anagram;