plant_types = {
  'G': 'Grass', 'C': 'Clover', 'R': 'Radishes', 'V': 'Violets', 
}

class Garden(object):
  def __init__(self, diagram, students = None):
    self.rows = diagram.split('\n')
    self.students = sorted(students) if students else [
      'Alice', 'Bob', 'Charlie', 'David',
      'Eve', 'Fred', 'Ginny', 'Harriet',
      'Ileana', 'Joseph', 'Kincaid', 'Larry',
    ]

  def plants(self, student):
    start = self.students.index(student) * 2
    return [plant_types[self.rows[i][j]] for i in range(2) for j in range(start, start+2)]