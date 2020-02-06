class ComplexNumber {
  double _real;
  double _imag;

  ComplexNumber(double real, double imag) {
    _real = real;
    _imag = imag;
  }

  double getReal() {
    return _real;
  }

  double getImag() {
    return _imag;
  }

  ComplexNumber add(ComplexNumber other) {
    double real = getReal() + other.getReal();
    double imag = getImag() + other.getImag();
    return new ComplexNumber(real, imag);
  }
  
  ComplexNumber minus(ComplexNumber other) {
    double real = getReal() - other.getReal();
    double imag = getImag() - other.getImag();
    return new ComplexNumber(real, imag);
  }

  ComplexNumber times(ComplexNumber other) {
    double real = getReal() * other.getReal() - getImag() * other.getImag();
    double imag = getImag() * other.getReal() + getReal() * other.getImag();
    return new ComplexNumber(real, imag);
  }

  ComplexNumber div(ComplexNumber other) {
    double denom = other.getReal() * other.getReal() + other.getImag() * other.getImag();
    double real = (getReal() * other.getReal() + getImag() * other.getImag()) / denom;
    double imag = (getImag() * other.getReal() - getReal() * other.getImag()) / denom;
    return new ComplexNumber(real, imag);
  }

  double abs() {
    return Math.sqrt(getReal() * getReal() + getImag() * getImag());
  }

  ComplexNumber conjugate() {
    return new ComplexNumber(getReal(), -getImag());
  }

  ComplexNumber exponentialOf() {
    double real = Math.exp(getReal()) * Math.cos(getImag());
    double imag = Math.exp(getReal()) * Math.sin(getImag());
    return new ComplexNumber(real, imag);
  }
}