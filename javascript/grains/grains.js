import BigInt from './big-integer'

class Grains {
  square(n) {
    return BigInt(1).shiftLeft(n - 1).toString();
  }

  total() {
    return BigInt(1).shiftLeft(64).minus(1).toString();
  }
}

export default Grains;