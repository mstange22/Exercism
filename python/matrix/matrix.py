class Matrix(object):
    def __init__(self, matrix_string):
        self.matrix = matrix_string.split('\n')

    def row(self, index):
        return [int(digit) for digit in self.matrix[index].split(' ')]

    def column(self, index):
        return [int(row.split(' ')[index]) for row in self.matrix]
