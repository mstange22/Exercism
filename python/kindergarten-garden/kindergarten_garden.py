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
    res = []
    for i in range(2):
      for j in range(start, start+2):
        res.append(plant_types[self.rows[i][j]])
    return res
    # or messy ineficient one-liner:
    # return [plant_types[self.rows[i][j]] for i in range(2) for j in range(self.students.index(student) * 2, (self.students.index(student) * 2)+2)]