export class ComplexNumber {
  constructor(a, b) {
    this.real = a;
    this.imag = b;
  }

  get abs() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp() {
    return new ComplexNumber(
      Math.E ** this.real * Math.cos(this.imag),
      Math.E ** this.real * Math.sin(this.imag),
    );
  }

  add(cn) {
    return new ComplexNumber(this.real + cn.real, this.imag + cn.imag); 
  }

  sub(cn) {
    return new ComplexNumber(this.real - cn.real, this.imag - cn.imag); 
  }

  mul(cn) {
    return new ComplexNumber(this.real * cn.real - this.imag * cn.imag, this.imag * cn.real + this.real * cn.imag); 
  }

  div(cn) {
    return new ComplexNumber(
      (this.real * cn.real + this.imag * cn.imag) / (cn.real * cn.real + cn.imag * cn.imag),
      (this.imag * cn.real - this.real * cn.imag) / (cn.real * cn.real + cn.imag * cn.imag)
    );
  }
}