class GradeSchool {
  private roster: { [grade: string]: string[] } = {}

  studentRoster() {
    return Object.keys(this.roster).reduce((map, grade) => {
      map.set(grade, [...this.roster[grade]])
      return map
    }, new Map<string, string[]>())
  }

  addStudent(name: string, grade: number) {
    const currGrade = this.roster[grade]
    if (currGrade) {
      const index = currGrade.findIndex(student => student.localeCompare(name) >= 0)
      if (index === -1) {
        currGrade.push(name)
      } else {
        currGrade.splice(index, 0, name)
      }
    } else {
      this.roster[grade] = [name]
    }
  }

  studentsInGrade(grade: number) {
    const res = this.roster[grade]
    return res ? [...res] : []
  }
}

export default GradeSchool