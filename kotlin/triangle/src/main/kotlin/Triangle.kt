class Triangle<T>(val a: T, val b: T, val c: T) 
    where T : Number, T : Comparable<T> {
    
    private val sides: Set<T>

    init {
        val sortedSides = sequenceOf(a, b, c).sorted().toList()
        if (sortedSides[0].toDouble() + sortedSides[1].toDouble() <= sortedSides[2].toDouble()) {
            throw IllegalArgumentException("Not a triangle")
        }
        sides = sortedSides.toSet()
    }

    val isEquilateral: Boolean = sides.size == 1
    val isIsosceles: Boolean = sides.size <= 2
    val isScalene: Boolean = sides.size == 3
}
