class Crypto {
  constructor(text) {
    this.normalizedText = '';
    for (let i = 0; i < text.length; i++) {
      if (/[\w]/.test(text[i])) {
        this.normalizedText += text[i].toLowerCase();
      }
    }
  }

  normalizePlaintext() {
    return this.normalizedText;
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizedText.length));
  }

  plaintextSegments() {
    const segments = [];
    let segment = '';
    for (let i = 0; i < this.normalizedText.length; i++) {
      segment += this.normalizedText[i];
      if ((i + 1) % this.size() === 0) {
        segments.push(segment);
        segment = '';
      }
    }
    if (segment.length > 0) segments.push(segment);
    return segments;
  }

  ciphertext() {
    let cipherText = '';
    const segments = this.plaintextSegments();
    for (let i = 0; i < this.size(); i++) {
      for (let j = 0; j < segments.length; j++) {
        cipherText += segments[j][i] || '';
      }
    }
    return cipherText;
  }
}

export default Crypto;