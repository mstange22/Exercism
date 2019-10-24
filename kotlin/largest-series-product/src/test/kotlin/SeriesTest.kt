
import org.junit.Test
import org.junit.Ignore
import kotlin.test.assertEquals

class LargestSeriesTest {

    @Test
    fun findsTheLargestProductIfSpanEqualsLength() {
        assertEquals(18, LargestSeries("29").getLargestProduct(2))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductOf2WithNumbersInOrder() {
        assertEquals(72, LargestSeries("0123456789").getLargestProduct(2))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductOf2() {
        assertEquals(48, LargestSeries("576802143").getLargestProduct(2))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductOf3WithNumbersInOrder() {
        assertEquals(504, LargestSeries("0123456789").getLargestProduct(3))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductOf3() {
        assertEquals(270, LargestSeries("1027839564").getLargestProduct(3))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductOf5WithNumbersInOrder() {
        assertEquals(15120, LargestSeries("0123456789").getLargestProduct(5))
    }

    // @Ignore
    @Test
    fun findsTheLargestProductWithinABigNumber() {
        assertEquals(23520, LargestSeries("73167176531330624919225119674426574742355349194934").getLargestProduct(6))
    }

    // @Ignore
    @Test
    fun reports0IfAllDigitsAre0() {
        assertEquals(0, LargestSeries("0000").getLargestProduct(2))
    }

    // @Ignore
    @Test
    fun reports0IfAllSpansInclude0() {
        assertEquals(0, LargestSeries("99099").getLargestProduct(3))
    }

    // @Ignore
    @Test(expected = IllegalArgumentException::class)
    fun rejectsSpanLongerThanStringLength() {
        LargestSeries("123").getLargestProduct(4)
    }

    // @Ignore
    @Test
    fun reports1ForEmptyStringAndEmptyProduct() {
        assertEquals(1, LargestSeries("").getLargestProduct(0))
    }

    // @Ignore
    @Test
    fun reports1ForNonEmptyStringAndEmptyProduct() {
        assertEquals(1, LargestSeries("123").getLargestProduct(0))
    }

    // @Ignore
    @Test(expected = IllegalArgumentException::class)
    fun rejectsEmptyStringAndNonZeroSpan() {
        LargestSeries("").getLargestProduct(1)
    }

    // @Ignore
    @Test(expected = IllegalArgumentException::class)
    fun rejectsInvalidCharacterInDigits() {
        LargestSeries("1234a5")
    }

    // @Ignore
    @Test(expected = IllegalArgumentException::class)
    fun rejectsNegativeSpan() {
        LargestSeries("12345").getLargestProduct(-1)
    }

}
