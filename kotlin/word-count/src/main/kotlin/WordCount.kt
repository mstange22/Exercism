object WordCount {

    fun phrase(phrase: String): Map<String, Int> {
        var wordRegex = "[a-z0-9]+('*[a-z0-9]+)*".toRegex()
        return wordRegex.findAll(phrase.toLowerCase())
            .fold(mutableMapOf<String, Int>()) { map, match ->
                var count = map[match.value]
                map.put(match.value, if (count != null) count + 1 else 1)
                map
            }
    }
}
