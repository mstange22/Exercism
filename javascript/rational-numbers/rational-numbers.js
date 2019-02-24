const gcd = (a, b) => {
  if (!b) return Math.abs(a);
  return gcd(b, a % b);
};

export class Rational {
  constructor(a, b) {
    this.a = a / gcd(a, b);
    this.b = b / gcd(a, b);
    if (this.b < 0) {
      this.a = -this.a;
      this.b = Math.abs(this.b);
    }
    if (this.a === 0) this.b = 1;
  }

  add(num) {
    return new Rational(this.a * num.b + num.a * this.b, this.b * num.b);
  }

  sub(num) {
    return new Rational(this.a * num.b - num.a * this.b, this.b * num.b);
  }

  mul(num) {
    return new Rational(this.a * num.a, this.b * num.b);
  }

  div(num) {
    return new Rational(this.a * num.b, num.a * this.b);
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }

  exprational(exp) {
    return new Rational(this.a ** exp, this.b ** exp);
  }

  expreal(base) {
    base **= this.a / this.b;
    return base.toFixed(12) - base.toFixed(1) ? base : Math.round(base);
  }

  reduce() {
    return this;
  }
}
