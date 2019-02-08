from collections import defaultdict

class School(object):
    def __init__(self):
        self.children = defaultdict(list)

    def add_student(self, name, grade):
        self.children[str(grade)].append(name)

    def roster(self):
        res = []
        for grade in sorted(self.children.keys()):
            res += sorted(self.children[grade])
        return res

    def grade(self, grade_number):
        return sorted(self.children[str(grade_number)]) if str(grade_number) in self.children else []