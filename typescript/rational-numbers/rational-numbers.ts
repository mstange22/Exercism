const GCD = (a: number, b: number): number => {
  a = Math.abs(a)
  b = Math.abs(b)
  const least = Math.min(a, b)
  const greatest = Math.max(a, b)
  let gcd = 1;
  for (let i = least; i > 1; i--) {
    if (least % i === 0 && greatest % i === 0) {
      gcd = i
      break;
    }
  }
  return gcd
}

export default class Rational {
  a: number
  b: number

  constructor(numerator: number, denominator: number) {
    this.a = numerator
    this.b = denominator
  }

  reduce(): Rational {
    if (this.a === 0) {
      return new Rational(0, 1)
    }
    if (this.b < 0) {
      this.a *= -1
      this.b *= -1
    }
    const gcd = GCD(this.a, this.b)
    return new Rational(this.a / gcd, this.b / gcd)
  }

  add(other: Rational): Rational {
    const a = this.a * other.b + other.a * this.b
    const b = this.b * other.b
    return new Rational(a, b).reduce()
  }

  sub(other: Rational) {
    return new Rational(this.a * other.b - other.a * this.b, this.b * other.b).reduce()
  }

  mul(other: Rational) {
    return new Rational(this.a * other.a, this.b * other.b).reduce()
  }

  div(other: Rational) {
    return new Rational(this.a * other.b, other.a * this.b).reduce()
  }

  abs(): Rational {
    return new Rational(Math.abs(this.a), Math.abs(this.b)).reduce()
  }

  exprational(pow: number): Rational {
    return new Rational(Math.pow(this.a, pow), Math.pow(this.b, pow)).reduce()
  }

  expreal(n: number): number {
    return Number(Math.pow(n, (this.a / this.b)).toPrecision(15))
  }
}