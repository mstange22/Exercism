const GARDEN_MAP = {
  'C': 'clover',
  'G': 'grass',
  'R': 'radishes',
  'V': 'violets',
};

const STUDENTS = [
  'alice', 'bob', 'charlie', 'david', 'eve',
  'fred', 'ginny', 'harriet', 'ileana',
  'joseph', 'kincaid', 'larry',
];

const ROW_1 = 0;
const ROW_2 = 1;

export class Garden {
  constructor(plants, students) {
    plants = plants.split('\n');
    if (students) {
      students = students.map(s => s.toLowerCase()).sort();
    } else {
      students = STUDENTS;
    }
    for (let col = 0, student = 0; col < plants[0].length; col += 2, student++) {
      this[students[student]] = [
        GARDEN_MAP[plants[ROW_1][col]],
        GARDEN_MAP[plants[ROW_1][col + 1]],
        GARDEN_MAP[plants[ROW_2][col]],
        GARDEN_MAP[plants[ROW_2][col + 1]],
      ];
    }
  }
}