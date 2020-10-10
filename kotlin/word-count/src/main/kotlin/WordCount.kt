object WordCount {

    fun phrase(phrase: String): Map<String, Int> {
        return phrase.split("(,|\\s)+".toRegex())
            .fold(mutableMapOf<String, Int>()) { map, word ->
                var token = word
                    .replace("[\\s,.:!&@$%^&=\"]".toRegex(), "")
                    .toLowerCase()
                if (token != "") {
                    // check for single-quoted word (keep apostrophes)
                    if (token.startsWith('\'') && token.endsWith('\'')) {
                        token = token.substring(1, token.length - 1)
                    }
                    var count = map[token]
                    map.put(token, if (count != null) count + 1 else 1)
                }
                map
            }
    }
}
