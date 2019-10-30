struct PrimeFactors {
    let input: Int
    
    var toArray: [Int] {
        var factors = [Int]()
        var n = input
        var testVal = 2
        while n > 1 {
            while (n % testVal == 0) {
                factors.append(testVal)
                n /= testVal
            }
            testVal += 1
        }
        return factors
    }
    
    init(_ input: Int) {
        self.input = input
    }
}
