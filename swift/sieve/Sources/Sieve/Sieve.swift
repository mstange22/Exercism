class Sieve {
    var primes = [Int]()
    init(_ n: Int) {
        var composites = Set<Int>()
        for i in 2...n {
            if (!composites.contains(i)) {
                primes.append(i)
                // mark multiples of i as composite
                var j = i * i
                while j <= n {
                    composites.insert(j)
                    j += i
                }
            }
        }
    }
}
