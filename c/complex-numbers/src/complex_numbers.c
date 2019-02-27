#include "complex_numbers.h"
#include <stdio.h>
#include <math.h>

complex_t c_add(complex_t a, complex_t b)
{
   // (a + c) + (b + d) * i
   complex_t res = {
      a.real + b.real,
      a.imag + b.imag,
   };
   return res;
}

complex_t c_sub(complex_t a, complex_t b)
{
   complex_t res = {
      a.real - b.real,
      a.imag - b.imag,
   };
   return res;
}

complex_t c_mul(complex_t a, complex_t b)
{
   // (a * c - b * d) + (b * c + a * d) * i
   complex_t res = {
      (a.real * b.real) - (a.imag * b.imag),
      (a.imag * b.real) + (a.real * b.imag),
   };
   return res;
}

complex_t c_div(complex_t a, complex_t b)
{
   // (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i
   complex_t res = {
      ((a.real * b.real) + (a.imag * b.imag)) / (b.real * b.real + b.imag * b.imag),
      ((a.imag * b.real) - (a.real * b.imag)) / (b.real * b.real + b.imag * b.imag),
   };
   return res;
}

double c_abs(complex_t x)
{
   return sqrt(x.real * x.real + x.imag * x.imag);
}

complex_t c_conjugate(complex_t x)
{
   complex_t res = {
      x.real,
      -x.imag,
   };
   return res;
}

double c_real(complex_t x)
{
   return x.real;
}

double c_imag(complex_t x)
{
   return x.imag;
}

complex_t c_exp(complex_t x)
{
   // cos(b) + i * sin(b)
   complex_t res = {
      exp(x.real) * cos(x.imag),
      exp(x.real) * sin(x.imag),
   };
   return res;
}
