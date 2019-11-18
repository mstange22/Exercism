object Sieve {

    fun primesUpTo(upperBound: Int): List<Int> {
        var composites = mutableListOf<Int>()
        var primes = mutableListOf<Int>()
        for (i in 2..upperBound) {
            if (!composites.contains(i)) {
                primes.add(i)
                for (j in i..upperBound step i) {
                    composites.add(j)
                }
            }
        }
        return primes
    }
}
