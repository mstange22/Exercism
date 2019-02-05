from __future__ import division

def reduce(numer, denom):
    n = 2
    while n <= min(abs(numer), abs(denom)):
        while(abs(numer) % n == 0 and abs(denom) % n == 0):
            numer //= n
            denom //= n
        n += 1
    if numer == 0:
        denom = 1
    if denom < 0:
        denom = abs(denom)
        numer = -numer
    return (numer, denom)

class Rational(object):
    def __init__(self, numer, denom):
        reduced_rational = reduce(numer, denom)
        self.numer = reduced_rational[0]
        self.denom = reduced_rational[1]

    def __eq__(self, other):
        return self.numer == other.numer and self.denom == other.denom

    def __repr__(self):
        return f'{self.numer}/{self.denom}'

    def __add__(self, other):
        numer = (self.numer * other.denom) + (other.numer * self.denom)
        denom = self.denom * other.denom
        return Rational(numer, denom)
        
    def __sub__(self, other):
        numer = (self.numer * other.denom) - (other.numer * self.denom)
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __mul__(self, other):
        numer = self.numer * other.numer
        denom = self.denom * other.denom
        return Rational(numer, denom)

    def __truediv__(self, other):
        return self * Rational(other.denom, other.numer)

    def __abs__(self):
        return Rational(abs(self.numer), abs(self.denom))

    def __pow__(self, power):
        numer = self.numer ** power
        denom = self.denom ** power
        return Rational(numer, denom)

    def __rpow__(self, base):
        return base ** (self.numer / self.denom)
