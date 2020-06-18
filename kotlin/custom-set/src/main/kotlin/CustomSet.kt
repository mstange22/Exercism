class CustomSet(private vararg var set: Int) {

    fun isEmpty() = set.size == 0
    fun isSubset(other: CustomSet) = set.all { other.contains(it) }
    fun isDisjoint(other: CustomSet) = set.none { other.contains(it) }
    fun contains(element: Int) = set.any { it == element }
    fun intersection(other: CustomSet) = CustomSet(*set.filter { other.contains(it) }.toIntArray())
    fun add(element: Int) = set.plus(element).let { set = it }

    override fun equals(other: Any?) = other is CustomSet && isSubset(other) && other.isSubset(this)
    operator fun plus(other: CustomSet) = CustomSet(*set, *other.set)
    operator fun minus(other: CustomSet) = CustomSet(*set.filter { !other.contains(it) }.toIntArray())

}
