fileprivate func isPrime(_ n: Int) -> Bool {
    var testVal = 2;
    while testVal <= Int(Double(n).squareRoot()) {
        if n % testVal == 0 {
            return false
        }
        testVal += 1
    }
    return true
}

struct Prime {
    public static func nth(_ n: Int) -> Int? {
        if n == 0 {
            return nil
        }
        var primes = [Int]()
        var testVal = 2
        while primes.count < n {
            if (isPrime(testVal)) {
                primes.append(testVal)
            }
            testVal += 1
        }
        return primes[n - 1]
    }
}