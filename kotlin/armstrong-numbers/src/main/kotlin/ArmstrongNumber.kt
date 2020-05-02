import kotlin.math.*

object ArmstrongNumber {
    fun check(input: Int) = input == 0 || input.toString().fold(0) { accum, d ->
        accum + Character.getNumericValue(d)
            .toDouble()
            .pow(floor(log10(input.toDouble())) + 1.0)
            .toInt()
    } == input
}
