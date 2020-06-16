class Matrix(private val matrixAsString: String) {
    fun column(colNr: Int): List<Int> {
        return matrixAsString.split('\n')
            .map { it.trim().split("\\s+".toRegex())[colNr - 1].toInt() }
    }

    fun row(rowNr: Int): List<Int> {
        return matrixAsString
            .split('\n')[rowNr - 1]
            .trim()
            .split("\\s+".toRegex())
            .map { it.toInt() }
    }
}
