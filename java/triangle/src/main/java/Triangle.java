class Triangle {
    private final double a;
    private final double b;
    private final double c;

    Triangle(double side1, double side2, double side3) throws TriangleException {
        if (invalidSides(side1, side2, side3)) {
            throw new TriangleException("Invalid side(s)");
        };
        this.a = side1;
        this.b = side2;
        this.c = side3;
    }

    private boolean invalidSides(double a, double b, double c) {
        return a <= 0 || b <= 0 || c <= 0 || a + b < c || a + c < b || b + c < a;
    }

    boolean isEquilateral() {
        return a == b && b == c;
    }

    boolean isIsosceles() {
        return a == b || a == c || b == c;
    }

    boolean isScalene() {
        return a != b && a != c && b != c;
    }
}
