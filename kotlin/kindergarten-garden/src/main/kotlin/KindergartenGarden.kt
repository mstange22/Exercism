var GardenMap = mapOf('C' to "clover", 'G' to "grass", 'R' to "radishes", 'V' to "violets")

val nucleotideCounts = mutableMapOf('A' to 0, 'C' to 0, 'G' to 0, 'T' to 0)

class KindergartenGarden(private val diagram: String) {

    fun getPlantsOfStudent(student: String): List<String> {
        var index = (student.get(0).toUpperCase().toInt() - 'A'.toInt()) * 2
        var garden = diagram.split('\n')
        return listOf(
            GardenMap.getOrDefault(garden[0][index], ""),
            GardenMap.getOrDefault(garden[0][index + 1], ""),
            GardenMap.getOrDefault(garden[1][index], ""),
            GardenMap.getOrDefault(garden[1][index + 1], "")
        )
    }
}
