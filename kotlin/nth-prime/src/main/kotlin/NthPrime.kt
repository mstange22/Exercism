object Prime {

    fun nth(n: Int): Int {
        if (n == 0) {
            throw IllegalArgumentException("There is no zeroth prime.")
        }
        var primes = mutableListOf<Int>()
        var test = 2
        while (primes.size < n) {
            if (isPrime(test)) {
                primes.add(test)
            }
            test++
        }
        return primes[n - 1]
    }

    fun isPrime(n: Int): Boolean {
        var test = 2
        while (test <= Math.sqrt(n.toDouble())) {
            if (n % test++ == 0) {
                return false
            }
        }
        return true
    }
}
