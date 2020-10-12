class RotationalCipher(private val rotation: Int) {

    private fun translate(c: Char): Char {
        if (!c.isLetter()) return c
        val letterValue = c.toLowerCase().toInt() - 'a'.toInt()
        val newLetterValue = ((letterValue + rotation) % 26)
        val netOffset = newLetterValue - letterValue
        return c + netOffset
    }

    fun encode(text: String) = text
        .map { it -> translate(it) }
        .joinToString("")
}
