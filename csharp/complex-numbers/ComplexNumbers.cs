using System;

public struct ComplexNumber
{
    private readonly double real;
    private readonly double imaginary;

    public ComplexNumber(double real, double imaginary)
    {
        this.real = real;
        this.imaginary = imaginary;
    }

    public double Real() => real;

    public double Imaginary() => imaginary;

    public ComplexNumber Mul(ComplexNumber other)
    {
        return new ComplexNumber(
            real * other.Real() - imaginary * other.Imaginary(),
            imaginary * other.Real() + real * other.Imaginary()
        );
    }

    public ComplexNumber Add(ComplexNumber other)
    {
        return new ComplexNumber(real + other.Real(), imaginary + other.Imaginary());
    }

    public ComplexNumber Sub(ComplexNumber other)
    {
        return new ComplexNumber(real - other.Real(), imaginary - other.Imaginary());
    }

    public ComplexNumber Div(ComplexNumber other)
    {
        double denominator = Math.Pow(other.Real(), 2) + Math.Pow(other.Imaginary(), 2);
        return new ComplexNumber(
            (real * other.Real() + imaginary * other.Imaginary()) / denominator,
            (imaginary * other.Real() - real * other.Imaginary()) / denominator
        );
    }

    public double Abs()
    {
        return Math.Sqrt(real * real + imaginary * imaginary);
    }

    public ComplexNumber Conjugate()
    {
        return new ComplexNumber(real, -imaginary);
    }
    
    public ComplexNumber Exp()
    {
        double eToTheReal = Math.Pow(Math.E, real);
        return new ComplexNumber(eToTheReal * Math.Cos(imaginary), eToTheReal * Math.Sin(imaginary));
    }
}