object HandshakeCalculator {
    fun calculateHandshake(number: Int): List<Signal> {
        var res = Signal.values().filter { number.hasBitEnabled(it.ordinal) }
        return if (number.hasBitEnabled(4)) res.reversed() else res
    }
}

fun Int.hasBitEnabled(bit: Int): Boolean = this and (1 shl bit) != 0
