object MatchingBrackets {

    val brackets = mapOf('[' to ']', '{' to '}', '(' to ')' )

    fun isValid(input: String): Boolean {
        val stack = arrayListOf<Char>()
        for (c in input) {
            if (brackets.values.contains(c)) {
                if (stack.size == 0 || stack.removeAt(stack.lastIndex) != c) {
                    return false
                }
            } else if (brackets.keys.contains(c)) {
                stack.add(brackets[c]!!)
            }
        }
        return stack.size == 0
    }
}
