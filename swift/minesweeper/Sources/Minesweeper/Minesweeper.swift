import Foundation

class Board {
    var input = [String]()
    
    enum BoardError: Error {
        case differentLength, faultyBorder, invalidCharacter
    }
    
    init(_ input: [String]) throws {
        try validateBoard(board: input)
        self.input = input
    }
    
    func transform() -> [String] {
        return self.input.enumerated().map {(i, _) in
            return String(self.input[i].enumerated().map {(j, _) in
                transformCell(i, j)
            })
        }
    }
    
    func transformCell(_ i: Int, _ j: Int) -> Character {
        let currCell = input[i][input[i].index(input[i].startIndex, offsetBy: j)]
        
        // preserve border
        if (i == 0 || i == input.count - 1 || j == 0 || j == input[i].count - 1) {
            return currCell
        }
        if currCell == "*" {
            return currCell
        }
        // check around cell for mines
        var count = 0
        for k in i - 1...i + 1 {
            for l in j - 1...j + 1 {
                if (k < 1 || k > input.count - 2 || l < 1 || l > input[k].count - 2 || (k == i && l == j)) {
                    continue
                }
                let borderCell = input[k][input[k].index(input[k].startIndex, offsetBy: l)]
                count += borderCell == "*" ? 1 : 0
            }
        }
        return count == 0 ? " " : Character(UnicodeScalar(count + Int(Character("0").asciiValue!))!)
    }

    func validateBoard(board: [String]) throws {
        guard board.allSatisfy({ $0.count == board[0].count }) else {
            throw BoardError.differentLength
        }

        guard board.allSatisfy({ $0.range(of: #"[^\-*+| ]"#, options: .regularExpression) == nil }) else {
            throw BoardError.invalidCharacter
        }

        let second = board[0].index(board[0].startIndex, offsetBy: 1)
        let secondToLast = board[0].index(board[0].endIndex, offsetBy: -2)
        let top = board[0][second...secondToLast]
        let bottom = board[board.count - 1][second...secondToLast]

        guard board[0].first == "+" && board[0].last == "+" && board[board.count - 1].first == "+" &&
            board[board.count - 1].last == "+" && top.allSatisfy({ $0 == "-" }) && bottom.allSatisfy({ $0 == "-" }) &&
            board[1...board.count - 2].allSatisfy({ $0.first == "|" && $0.last == "|" }) else {
                throw BoardError.faultyBorder
        }
    }
}
