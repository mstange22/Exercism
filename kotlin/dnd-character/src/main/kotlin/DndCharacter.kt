import kotlin.math.*
import kotlin.collections.slice

class DndCharacter {

    val strength: Int = ability()
    val dexterity: Int = ability()
    val constitution: Int = ability()
    val intelligence: Int = ability()
    val wisdom: Int = ability()
    val charisma: Int = ability()
    val hitpoints: Int = 10 + modifier(constitution)

    companion object {

        fun ability() = List(4) { (1..6).random() }
            .sorted()
            .slice(1..3)
            .sum()

        fun modifier(score: Int) = floor((score - 10) / 2.0).toInt()
    }

}
