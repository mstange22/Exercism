class BaseConverter(inBase: Int, digits: IntArray) {
    var base10 = digits.foldIndexed(0) { i, accum, d -> accum + d * Math.pow(inBase.toDouble(), (digits.size - 1 - i).toDouble()).toInt() }

    init {
        require(inBase >= 2) { "Bases must be at least 2." }
        require(digits.size >= 1) { "You must supply at least one digit." }
        require(digits.size == 1 || digits[0] != 0) { "Digits may not contain leading zeros." }
        require(digits.all { it >= 0 }) { "Digits may not be negative." }
        require(digits.all { it < inBase }) { "All digits must be strictly less than the base." }
    }

    fun convertToBase(newBase: Int): IntArray {
        require(newBase >= 2) { "Bases must be at least 2." }

        if (base10 == 0) {
            return intArrayOf(0)
        }

        var res = mutableListOf<Int>()

        while (base10 > 0) {
            res.add(0, base10 % newBase)
            base10 /= newBase
        }
        return res.toIntArray()
    }
}
