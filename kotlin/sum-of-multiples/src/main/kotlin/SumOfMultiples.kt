object SumOfMultiples {
    
    fun sum(factors: Set<Int>, limit: Int): Int {
        var multiples = mutableSetOf<Int>()
        for (factor in factors) {
            for (i in factor..limit - 1 step factor) {
                multiples.add(i)
            }
        }
        return multiples.sum()
    }
}
