using System;
using System.Linq;

public static class Triangle
{
    public static bool IsScalene(double side1, double side2, double side3) =>
        isValidTriangle(new double[]{ side1, side2, side3 })
            && side1 != side2 && side1 != side3 && side2 != side3;

    public static bool IsIsosceles(double side1, double side2, double side3) =>
        isValidTriangle(new double[]{ side1, side2, side3 })
            && (side1 == side2 || side1 == side3 || side2 == side3);

    public static bool IsEquilateral(double side1, double side2, double side3) =>
        side1 != 0 && side1 == side2 && side2 == side3;

    static bool isValidTriangle(double[] sides) {
        var sortedSides = sides.OrderBy(x => x).ToArray();
        return sortedSides[2] > 0 && sortedSides[0] + sortedSides[1] > sortedSides[2];
    }
}