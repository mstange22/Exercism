class GradeSchool {
  private roster: { [grade: string]: string[] } = {}

  studentRoster() {
    return Object.keys(this.roster).reduce((map, grade) => {
      map.set(grade, [...this.roster[grade]])
      return map
    }, new Map<string, string[]>())
  }

  addStudent(name: string, grade: number) {
    const currGrade = this.roster[grade.toString()]
    if (currGrade) {
      currGrade.push(name)
      currGrade.sort()
    } else {
      this.roster[grade.toString()] = [name]
    }
  }

  studentsInGrade(grade: number) {
    const res = this.roster[grade.toString()]
    return res ? [...res] : []
  }
}

export default GradeSchool