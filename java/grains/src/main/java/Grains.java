import java.math.BigInteger;

class Grains {

    BigInteger one = new BigInteger("1");

    BigInteger grainsOnSquare(final int square) {
        if (square < 1 || square > 64) {
            throw new IllegalArgumentException("square must be between 1 and 64");
        }
        return one.shiftLeft(square - 1);
    }

    BigInteger grainsOnBoard() {
        return one.shiftLeft(64).subtract(one);
    }

}
