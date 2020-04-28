const isPrime = (n: number) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
    return true
  }
}

export default class DiffieHellman {
  constructor(private readonly p: number, private readonly g: number) {
    if (p < 1 || g > 97 || g < 1 || g > 100) {
      throw new Error('input out of range.')
    }
    if (!isPrime(p) || !isPrime(g)) {
      throw new Error('p and q must both be prime.')
    }
  }

  getPublicKeyFromPrivateKey = (key: number): number => {
    if (key < 2 || key >= this.p) {
      throw new Error('private key out of range.')
    }
    return this.g ** key % this.p
  }

  getSharedSecret = (alicePrivateKey: number, bobPublicKey: number) => bobPublicKey ** alicePrivateKey % this.p
}