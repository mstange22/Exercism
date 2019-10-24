enum class Allergen(val score: Int) {
    EGGS(1),
    PEANUTS(2),
    SHELLFISH(4),
    STRAWBERRIES(8),
    TOMATOES(16),
    CHOCOLATE(32),
    POLLEN(64),
    CATS(128)
}

class Allergies(score: Int) {
    val score = score

    fun isAllergicTo(allergen: Allergen) = allergen.score and this.score != 0
    
    fun getList(): List<Allergen> = Allergen.values().filter({ it.score and this.score != 0 })
}
