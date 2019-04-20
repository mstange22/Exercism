class Queen(object):
    def __init__(self, row, column):
        if row < 0 or row > 7:
            raise ValueError('bad row value')
        if column < 0 or column > 7:
            raise ValueError('bad column value')
        self.row = row
        self.column = column

    def can_attack(self, another_queen):
        if self.row == another_queen.row and self.column == another_queen.column:
            raise ValueError('same position')

        # orthogonal
        if self.row == another_queen.row or self.column == another_queen.column:
            return True
        
        # diagonal
        if abs(self.row - another_queen.row) == abs(self.column - another_queen.column):
            return True
        
        return False