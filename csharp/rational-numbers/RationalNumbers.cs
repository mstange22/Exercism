using System;

public static class RealNumberExtension
{
    public static double Expreal(this int realNumber, RationalNumber r)
    {
        return Math.Pow(realNumber, (double)r.a / r.b);
    }
}

public struct RationalNumber
{
    public int a;
    public int b;
    public RationalNumber(int numerator, int denominator)
    {
        a = numerator;
        b = denominator;
    }

    public static RationalNumber operator +(RationalNumber r1, RationalNumber r2)
    {
        RationalNumber r = new RationalNumber(r1.a * r2.b + r2.a * r1.b, r1.b * r2.b);
        return r.Reduce();
    }

    public static RationalNumber operator -(RationalNumber r1, RationalNumber r2)
    {
        RationalNumber r = new RationalNumber(r1.a * r2.b - r2.a * r1.b, r1.b * r2.b);
        return r.Reduce();
    }

    public static RationalNumber operator *(RationalNumber r1, RationalNumber r2)
    {
        return new RationalNumber(r1.a * r2.a, r1.b * r2.b).Reduce();
    }

    public static RationalNumber operator /(RationalNumber r1, RationalNumber r2)
    {
        if (r2.a * r1.b == 0) throw new ArgumentException("bad");
        RationalNumber r = new RationalNumber(r1.a * r2.b, r2.a * r1.b).Reduce();
        return r.Reduce();
    }

    public RationalNumber Abs()
    {
        return new RationalNumber(Math.Abs(a), Math.Abs(b));
    }

    private int GCD(int a, int b) {
        while (a != 0 && b != 0) {
            if (a > b) {
                a %= b;
            } else {
                b %= a;
            }
        }
        return a == 0 ? b : a;
    }

    public RationalNumber Reduce()
    {
        int numerator = a;
        int denominator = b;
        if (numerator == 0) {
            denominator = 1;
        }
        if (denominator < 0) {
            numerator = -numerator;
            denominator = -denominator;
        }
        int gcd = GCD(Math.Abs(numerator), Math.Abs(denominator));
        return new RationalNumber(numerator / gcd, denominator / gcd);
    }

    public RationalNumber Exprational(int power)
    {
        return new RationalNumber((int)Math.Pow(a, power), (int)Math.Pow(b, power));
    }

    public double Expreal(int baseNumber)
    {
        throw new NotImplementedException("You need to implement this function.");
    }
}