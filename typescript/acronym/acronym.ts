export default class Acronym {
  static parse(phrase: string): string {
    const words: string[] = phrase.split(/[ -]/);
    return words.reduce((accum, word) => {
      accum += word[0].toUpperCase();
      // check for mixed case
      if (/^[A-Z]+[a-z]+[A-Z]+/.test(word)) {
        // add all other uppercase letters
        for (let i = 1; i < word.length; i++) {
          if (word[i] === word[i].toUpperCase()) accum += word[i];
        }
      }
      return accum;
    }, '');
  }
}
