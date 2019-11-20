class BaseConverter {
    var base10 = 0

    constructor(inBase: Int, digits: IntArray) {
        require(inBase >= 2) { "Bases must be at least 2." }
        require(digits.size >= 1) { "You must supply at least one digit." }
        require(digits.size == 1 || digits[0] != 0) { "Digits may not contain leading zeros." }

        var exp = (digits.size - 1).toDouble()

        for (digit in digits) {
            require(digit >= 0) { "Digits may not be negative." }
            require(digit < inBase) { "All digits must be strictly less than the base." }
            base10 += digit * Math.pow(inBase.toDouble(), exp--).toInt()
        }
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
