const input = process.argv[2] || 'aaaaa';

class Cipher {
  constructor(key = null) {
    console.log('key:', key);
    if (key === null) {
      console.log('here?');
      for (let i = 0; i <= 10; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0)); 
      }
      this.key = key;
    } else {
      if (key === '' || key.startsWith(' ')) throw new Error('Bad key');
      for (let i = 0; i < key.length; i++) {
        if (key[i].match(/[A-Z0-9]/)) {
          throw new Error('Bad key');
        }
      }
    }
  }
  shift(char, index, encoding) {
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);
    const keyCode = this.key.charCodeAt(index);
    const shift = keyCode - aCode;
    const charCode = char.charCodeAt(0);
    let newCode;
    if (encoding) {
      newCode = charCode + shift;
      if (newCode > zCode) {
        newCode = aCode + (newCode - zCode) - 1;
      }
    } else {
      newCode = charCode - shift;
      if (newCode < aCode) {
        newCode = zCode - (aCode - newCode) + 1;
      }
    }
    return String.fromCharCode(newCode)
  }
  encode(s) {
    let encodedString = '';
    for (let i = 0; i < s.length; i++) {
      encodedString += this.shift(s[i].toLowerCase(), i, true);
    }
    return encodedString;
  }
  decode(s) {
    let decodedString = '';
    for (let i = 0; i < s.length; i++) {
      decodedString += this.shift(s[i].toLowerCase(), i, false);
    }
    return decodedString;
  }
}

const c = new Cipher('');
// console.log('input:', input);
// console.log('key:', c.key);
// console.log('encoded:', c.encode(input));
