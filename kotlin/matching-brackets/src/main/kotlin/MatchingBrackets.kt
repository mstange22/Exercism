object MatchingBrackets {

    val brackets = hashMapOf('[' to ']', '{' to '}', '(' to ')' )

    fun isValid(input: String): Boolean {
        val stack = arrayListOf<Char>()
        input.forEach { c -> 
            if (brackets.values.contains(c)) {
                if (stack.size == 0 || stack.removeAt(stack.size - 1) != c) {
                    return false
                }
            } else if (brackets.keys.contains(c)) {
                stack.add(brackets[c]!!)
            }
        }
        return stack.size == 0
    }
}
