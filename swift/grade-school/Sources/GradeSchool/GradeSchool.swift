class GradeSchool {
  var roster = [Int: [String]]()
  var sortedRoster: [Int: [String]] {
    return roster.mapValues { $0.sorted() }
  }

  func addStudent(_ name: String, grade: Int) {
    roster[grade] == nil ? roster[grade] = [name] : roster[grade]!.append(name)
  }

  func studentsInGrade(_ grade: Int) -> [String]? {
    return roster[grade] ?? []
  }
}