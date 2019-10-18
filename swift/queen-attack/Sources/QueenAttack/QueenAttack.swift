class Queens {
    let white: [Int]
    let black: [Int]

    var description: String {
        var res = [String]()
        for i in 0..<8 {
            var row = [String]()
            for j in 0..<8 {
                if (i == white[0] && j == white[1]) {
                    row.append("W")
                } else if (i == black[0] && j == black[1]) {
                    row.append("B")
                } else {
                    row.append("_")
                }
            }
            res.append(row.joined(separator: " "))
        }
        return res.joined(separator: "\n")
    }
    
    var canAttack: Bool {
        white[0] == black[0] || white[1] == black[1] ||
            abs(white[0] - black[0]) == abs(white[1] - black[1])
    }
    
    enum InitError: Error {
        case incorrectNumberOfCoordinates
        case invalidCoordinates
        case sameSpace
    }
    
    init(white: [Int] = [0, 3], black: [Int] = [7, 3]) throws {
        if white.count != 2 || black.count != 2 {
            throw InitError.incorrectNumberOfCoordinates
        }
        if white[0] == black[0] && white[1] == black[1] {
            throw InitError.sameSpace
        }
        if white[0] < 0 || white[0] > 7 || white[1] < 0 || white[1] > 7 ||
            black[0] < 0 || black[0] > 7 || black[1] < 0 || black[1] > 7 {
            throw InitError.invalidCoordinates
        }
        self.white = white
        self.black = black
    }
}
