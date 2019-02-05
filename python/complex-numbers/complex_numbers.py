import math

class ComplexNumber(object):
    def __init__(self, real, imaginary):
        self.real = real
        self.imaginary = imaginary

    def __eq__(self, other):
        return self.real == other.real and self.imaginary == other.imaginary

    def __add__(self, other):
        return ComplexNumber(self.real + other.real, self.imaginary + other.imaginary)

    def __mul__(self, other):
        real = self.real * other.real - self.imaginary * other.imaginary
        imaginary = self.imaginary * other.real + self.real * other.imaginary
        return ComplexNumber(real, imaginary)

    def __sub__(self, other):
        return ComplexNumber(self.real - other.real, self.imaginary - other.imaginary)

    def __truediv__(self, other):
        real = (self.real * other.real + self.imaginary * other.imaginary) \
            / (other.real * other.real + other.imaginary * other.imaginary)
        imaginary = (self.imaginary * other.real - self.real * other.imaginary) \
            / (other.real * other.real + other.imaginary * other.imaginary)
        return ComplexNumber(real, imaginary)

    def __abs__(self):
        return math.sqrt(self.real * self.real + self.imaginary * self.imaginary)

    def conjugate(self):
        return ComplexNumber(self.real, -self.imaginary)

    def exp(self):
        return ComplexNumber(math.exp(self.real) * math.cos(self.imaginary),
            math.exp(self.real) * math.sin(self.imaginary))
