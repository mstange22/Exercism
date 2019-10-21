class SimulatedRobot {
    enum Bearing: Int {
        case north = 0
        case east = 1
        case south = 2
        case west = 3
    }
    
    enum Instruction: Character {
        case turnLeft = "L"
        case turnRight = "R"
        case advance = "A"
    }
    
    var bearing = Bearing(rawValue: 0)
    var coordinates = [0, 0]
    
    func orient(_ bearing: Bearing) {
        self.bearing = bearing
    }
    
    func turnRight() {
        self.bearing = Bearing(rawValue: (self.bearing!.rawValue + 1) % 4)
    }
    
    func turnLeft() {
        self.bearing = Bearing(rawValue: (self.bearing!.rawValue - 1 + 4) % 4)
    }
    
    func advance() {
        if bearing == .north {
            self.coordinates[1] += 1
        } else if bearing == .east {
            self.coordinates[0] += 1
        } else if bearing == .south {
            self.coordinates[1] -= 1
        } else {
            self.coordinates[0] -= 1
        }
    }
    
    func at(x: Int, y: Int) {
        self.coordinates = [x, y]
    }
    
    func instructions(_ commands: String) -> [Instruction] {
        var instructionList = [Instruction]()
        for c in commands {
            if let instruction = Instruction(rawValue: c) {
                instructionList.append(instruction)
            }
        }
        return instructionList
    }
    
    func place(x: Int, y: Int, direction: Bearing) {
        self.coordinates = [x, y]
        self.bearing = direction
    }
    
    func evaluate(_ instructions: String) {
        for c in instructions {
            if c == "A" {
                advance()
            } else if c == "R" {
                turnRight()
            } else {
                turnLeft()
            }
        }
    }
}
