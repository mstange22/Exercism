object RunLengthEncoding {

    fun encode(input: String): String {
        var count = 1
        return input.foldIndexed("") { i, acc, c  ->
            var letters = ""
            if (c == input.getOrNull(i + 1)) {
                count++
            } else {
                letters += if (count == 1) c else "$count$c"
                count = 1
            }
            acc + letters
        }
    }

    fun decode(input: String): String {
        var count = ""
        return input.fold("") { acc, c -> 
            var letters = ""
            if (c.isDigit()) {
                count += c
            } else {
                letters += if (count != "") c.toString().repeat(count.toInt()) else c
                count = ""
            }
            acc + letters
        }
    }
}
