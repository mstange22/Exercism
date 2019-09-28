using System;

public static class Darts
{
    public static int Score(double x, double y)
    {
        double z = Math.Sqrt(x * x + y * y);
        if (z > 10) return 0;
        if (z > 5) return 1;
        if (z > 1) return 5;
        return 10;
    }
}
