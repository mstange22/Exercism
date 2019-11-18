import java.math.BigInteger

object Board {

    fun getGrainCountForSquare(number: Int): BigInteger {
        if (number < 1 || number > 64) {
            throw IllegalArgumentException("Only integers between 1 and 64 (inclusive) are allowed")
        }
        return BigInteger("1").shiftLeft(number - 1)
    }

    fun getTotalGrainCount(): BigInteger {
        return BigInteger("1").shiftLeft(64) - BigInteger("1")
    }
}
