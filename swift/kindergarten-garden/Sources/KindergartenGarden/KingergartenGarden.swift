import Foundation

enum Plant: Character {
    case clover = "C"
    case grass = "G"
    case radishes = "R"
    case violets = "V"
}

class Garden {
    let garden: [String]
    let children: [String]
    
    init(_ diagram: String, children: [String] = []) {
        self.garden = diagram.components(separatedBy: "\n")
        self.children = children.sorted();
    }
    
    func plantsForChild(_ child: String) -> [Plant] {
        // get integer value of first index from given children list or alphabetically
        let firstIndex = self.children.count > 0 ? (children.index(of: child) ?? 0) * 2 : (
            Int((child[child.index(child.startIndex, offsetBy: 0)].asciiValue! - Character("A").asciiValue!) * 2)
        )
        
        // convert index to String.index in garden
        let studentFirstIndex = garden[0].index(garden[0].startIndex, offsetBy: firstIndex)
        let studentSecondIndex = garden[0].index(garden[0].startIndex, offsetBy: firstIndex + 1)

        return [
            Plant(rawValue: garden[0][studentFirstIndex])!,
            Plant(rawValue: garden[0][studentSecondIndex])!,
            Plant(rawValue: garden[1][studentFirstIndex])!,
            Plant(rawValue: garden[1][studentSecondIndex])!
        ]
    }
}
