using System;

public class SpaceAge
{
    private static double earthYears;
    public SpaceAge(int seconds)
    {
        earthYears = seconds / 31557600.00;
    }

    public double OnEarth()
    {
        return earthYears;
    }

    public double OnMercury()
    {
        return earthYears / 0.2408467;
    }

    public double OnVenus()
    {
        return earthYears / 0.61519726;
    }

    public double OnMars()
    {
        return earthYears / 1.8808158;
    }

    public double OnJupiter()
    {
        return earthYears / 11.862615;
    }

    public double OnSaturn()
    {
        return earthYears / 29.447498;
    }

    public double OnUranus()
    {
        return earthYears / 84.016846;
    }

    public double OnNeptune()
    {
        return earthYears / 164.79132;
    }
}