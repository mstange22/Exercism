class Anagram {
  constructor(word) {
    this.word = word;
  }

  isAnagram(testWord) {
    if (testWord.length !== this.word.length || testWord === this.word.toLowerCase()) return false;
    for (let i = 0; i < this.word.length; i++) {
      if (!testWord.includes(this.word[i].toLowerCase())) return false;
      else testWord = testWord.replace(this.word[i].toLowerCase(), '');
    }
    return true;
  }

  matches(list) {
    return list.reduce((res, word) => this.isAnagram(word.toLowerCase()) ? [...res, word] : res, []);
  }
}

export default Anagram;