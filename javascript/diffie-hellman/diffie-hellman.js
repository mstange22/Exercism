export default class DiffieHellman {
  constructor(p, g) {
    if (p < 2 || g < 2) throw new Error('Out of range');
    if (!this.isPrime(p) || !this.isPrime(g)) throw new Error('Not prime');
    this.p = p;
    this.g = g;
  }

  isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  getPublicKeyFromPrivateKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p) throw new Error('Private key out of range')
    return this.g ** privateKey % this.p;
  }

  getSharedSecret (privateKey, publicKey) {
    return publicKey ** privateKey % this.p;
  }
};