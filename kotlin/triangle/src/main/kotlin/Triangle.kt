class Triangle<out T : Number>(val a: T, val b: T, val c: T) {

    init {
        if (a == 0 || b == 0 || c == 0) {
            throw IllegalArgumentException("Not a triangle")
        }
        // if (sideA + sideB <= sideC) {
        //     throw IllegalArgumentException("Not a triangle")
        // }

        val sortedSides = mutableListOf<T>(a, b, c)
        println("sortedSides: $sortedSides")
        
        sortedSides.sort()
        // if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
        //     throw IllegalArgumentException("Not a triangle")
        // }
    }

    val isEquilateral: Boolean = setOf<T>(a, b, c).size == 1
    val isIsosceles: Boolean = setOf<T>(a, b, c).size <= 2
    val isScalene: Boolean = setOf<T>(a, b, c).size == 3
}