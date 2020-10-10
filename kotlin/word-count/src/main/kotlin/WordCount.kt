object WordCount {

    fun phrase(phrase: String): Map<String, Int> {
        var map =  mutableMapOf<String, Int>()
        phrase.split("(,|\\s)+".toRegex()).forEach { word ->
            var token = word.replace("[\\s,.:!&@$%^&=\"]".toRegex(), "").toLowerCase()
            if (token.length > 0) {
                if (token[0] == '\'' && token[token.length - 1] == '\'') {
                    token = token.substring(1, token.length - 1)
                }
                var count = map[token]
                if (count !== null) {
                    count += 1
                } else {
                    count = 1
                }
                map.put(token, count)
            }
        }
        return map
    }
}
