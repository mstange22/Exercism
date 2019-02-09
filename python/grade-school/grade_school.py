from collections import defaultdict

class School(object):
    def __init__(self):
        self.children = defaultdict(list)

    def add_student(self, name, grade):
        self.children[grade].append(name)
        self.children[grade].sort()

    def roster(self):
        res = []
        for grade in sorted(self.children.keys()):
            res += self.children[grade]
        return res

    def grade(self, grade_number):
        return sorted(self.children[grade_number])