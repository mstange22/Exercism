class Triangle<T>(val a: T, val b: T, val c: T) 
    where T : Number, T : Comparable<T> {

    init {
        if (a == 0 || b == 0 || c == 0) {
            throw IllegalArgumentException("Not a triangle")
        }

        val sortedSides = mutableListOf<T>(a, b, c).sorted()
        if (sortedSides[0].toDouble() + sortedSides[1].toDouble() <= sortedSides[2].toDouble()) {
            throw IllegalArgumentException("Not a triangle")
        }
    }

    val isEquilateral: Boolean = setOf<T>(a, b, c).size == 1
    val isIsosceles: Boolean = setOf<T>(a, b, c).size <= 2
    val isScalene: Boolean = setOf<T>(a, b, c).size == 3
}
