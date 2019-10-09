import java.math.BigInteger;

class Grains {

    BigInteger computeNumberOfGrainsOnSquare(final int square) {
        if (square < 1 || square > 64) {
            throw new IllegalArgumentException("square must be between 1 and 64");
        }
        return new BigInteger("1").shiftLeft(square - 1);
    }

    BigInteger computeTotalNumberOfGrainsOnBoard() {
        return new BigInteger("1").shiftLeft(64).subtract(BigInteger.valueOf(1));
    }

}
