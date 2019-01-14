class Matrix(object):
    def __init__(self, matrix_string):
        self.rows = [list(map(int, row.split(' '))) for row in matrix_string.split('\n')]
        self.columns = [[row[i] for row in self.rows] for i in range(len(self.rows[0]))]

    def row(self, index):
        return self.rows[index]

    def column(self, index):
        return self.columns[index]