object ResistorColorTrio {

    fun text(vararg input: Color): String {
        var value = input.elementAt(0).ordinal * 10 + input.elementAt(1).ordinal
        var zeroes = "0".repeat(input.elementAt(2).ordinal)
        value = "${value}${zeroes}".toInt()
        var unitVal = 0
        while (value % 1000 == 0) {
            value /= 1000
            unitVal++
        }
        return "${value} ${Unit.values().elementAt(unitVal).name.toLowerCase()}"
    }

}
