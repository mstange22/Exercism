const PLANTS: { [letter: string]: string } = {
  V: 'violets',
  C: 'clover',
  G: 'grass',
  R: 'radishes',
}

const defaultStudents: string[] = [
  'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred',
  'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'
]

export default class Garden {
  [student: string]: string[]

  constructor(diagram: string, students?: string[]) {
    const garden = diagram.split('\n')
    students = students ? students.sort() : defaultStudents
    students.forEach((student, i) => {
      this[student.toLowerCase()] = [
        PLANTS[garden[0][2 * i]],
        PLANTS[garden[0][2 * i + 1]],
        PLANTS[garden[1][2 * i]],
        PLANTS[garden[1][2 * i + 1]],
      ]
    })
  }
}