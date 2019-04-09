NORTH = 0
EAST = 1
SOUTH = 2
WEST = 3


class Robot(object):
    def __init__(self, bearing=NORTH, x=0, y=0):
        self.coordinates = (x, y)
        self.bearing = bearing
    
    def turn_right(self):
        self.bearing = (self.bearing + 1) % 4

    def turn_left(self):
        self.bearing = (self.bearing -1 + 4) % 4
    
    def advance(self):
        if self.bearing == NORTH:
            self.coordinates = (self.coordinates[0], self.coordinates[1] + 1)
        if self.bearing == EAST:
            self.coordinates = (self.coordinates[0] + 1, self.coordinates[1])
        if self.bearing == SOUTH:
            self.coordinates = (self.coordinates[0], self.coordinates[1] - 1)
        if self.bearing == WEST:
            self.coordinates = (self.coordinates[0] - 1, self.coordinates[1])

    def simulate(self, commands):
        for command in commands:
            if command == 'R':
                self.turn_right()
            elif command == 'L':
                self.turn_left()
            else:
                self.advance()
            
