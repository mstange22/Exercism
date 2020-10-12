class School {

    private var students = mutableMapOf<Int, List<String>>()

    fun add(student: String, grade: Int) {
        val gradeStudents = students.getOrPut(grade) { emptyList() }
        students.put(grade, (gradeStudents + student).sorted())
    }

    fun grade(grade: Int) = students[grade]?: emptyList()

    fun roster() = students.keys
        .sorted()
        .map { grade -> students[grade]!! }
        .flatMap{ it }
}
