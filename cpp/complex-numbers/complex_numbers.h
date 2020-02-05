#if !defined(COMPLEX_NUMBERS_H)
#define COMPLEX_NUMBERS_H

namespace complex_numbers {
  class Complex {
    public:
      Complex(double real, double imag);
      double real() const;
      double imag() const;
      double abs() const;
      Complex conj() const;
      Complex exp() const;
      Complex operator + (Complex const &obj) const;
      Complex operator - (Complex const &obj) const;
      Complex operator * (Complex const &obj) const;
      Complex operator / (Complex const &obj) const;
    private:
      double _real;
      double _imag;
  };
}

#endif