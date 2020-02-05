#include "complex_numbers.h"
#include <cmath>

namespace complex_numbers {
  Complex::Complex(double real, double imag) : _real(real), _imag(imag){}

  double Complex::real() const {
    return _real;
  }

  double Complex::imag() const {
    return _imag;
  }

  double Complex::abs() const {
    return sqrt(_real * _real + _imag * _imag);
  }

  Complex Complex::conj() const {
    return Complex(_real, -_imag);
  }
  
  Complex Complex::exp() const {
    double real = pow(M_E, _real) * cos(_imag);
    double imag = pow(M_E, _real) * sin(_imag);
    return Complex(real, imag);
  };

  Complex Complex::operator + (Complex const &obj) const {
    double real = _real + obj.real(); 
    double imag = _imag + obj.imag(); 
    return Complex(real, imag); 
  }

  Complex Complex::operator - (Complex const &obj) const {
    return *this + Complex(-obj.real(), -obj.imag()); 
  }

  Complex Complex::operator * (Complex const &obj) const {
    double real = _real * obj.real() - _imag * obj.imag(); 
    double imag = _imag * obj.real() + _real * obj.imag(); 
    return Complex(real, imag); 
  }

  Complex Complex::operator / (Complex const &obj) const {
    double real = (_real * obj.real() + _imag * obj.imag()) / (obj.real() * obj.real() + obj.imag() * obj.imag());
    double imag = (_imag * obj.real() - _real * obj.imag()) / (obj.real() * obj.real() + obj.imag() * obj.imag());
    return Complex(real, imag); 
  }
}