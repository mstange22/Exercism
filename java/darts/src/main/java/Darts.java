import java.lang.Math;

class Darts {
    private int score;

    Darts(double x, double y) {
        double radius = Math.sqrt((x * x) + (y * y));
        if (radius > 10) {
            score = 0;
        } else if (radius > 5) {
            score = 1;
        } else if (radius > 1) {
            score = 5;
        } else {
            score = 10;
        }
    }

    int score() {
        return score;
    }

}
