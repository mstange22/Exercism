from collections import defaultdict

class School(object):
    def __init__(self):
        self.children = defaultdict(list)

    def add_student(self, name, grade):
        self.children[grade].append(name)

    def roster(self):
         return [child for grade in sorted(self.children) for child in sorted(self.children[grade])]

    def grade(self, grade_number):
        return sorted(self.children[grade_number])