object PrimeFactorCalculator {

    fun primeFactors(int: Int): List<Int> = primeFactors(int.toLong()).map { it.toInt() }

    fun primeFactors(long: Long): List<Long> {
        var factors = mutableListOf<Long>()
        var testVal = 2L
        var n = long
        while (n > 1) {
            while (n % testVal == 0L) {
                factors.add(testVal)
                n /= testVal
            }
            testVal++
        }
        return factors
    }
}
