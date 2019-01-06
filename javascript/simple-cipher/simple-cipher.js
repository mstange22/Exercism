export class Cipher {
  constructor(key = null) {
    if (key === null) {
      for (let i = 0; i <= 100; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)); 
      }
    } else {
      if (key === '') throw new Error('Bad key');
      for (let i = 0; i < key.length; i++) {
        if (!key[i].match(/^[a-z]+$/)) {
          throw new Error('Bad key');
        }
      }
    }
    this.key = key;
  }

  applyShift(char, index, isEncoding) {
    const min = 'a'.charCodeAt(0);
    const max = 'z'.charCodeAt(0);
    const keyCode = this.key.charCodeAt(index % this.key.length);
    const shift = keyCode - min;
    const charCode = char.charCodeAt(0);
    let newCode;
    if (isEncoding) {
      newCode = charCode + shift;
      if (newCode > max) {
        newCode = min + (newCode - max) - 1;
      }
    } else {
      newCode = charCode - shift;
      if (newCode < min) {
        newCode = max - (min - newCode) + 1;
      }
    }
    return String.fromCharCode(newCode)
  }

  encode(s) {
    let encodedString = '';
    for (let i = 0; i < s.length; i++) {
      encodedString += this.applyShift(s[i].toLowerCase(), i, true);
    }
    return encodedString;
  }

  decode(s) {
    let decodedString = '';
    for (let i = 0; i < s.length; i++) {
      decodedString += this.applyShift(s[i].toLowerCase(), i, false);
    }
    return decodedString;
  }
}