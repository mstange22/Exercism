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
        var startIndex: Int;
        if self.children.count > 0 {
            startIndex = (children.index(of: child) ?? 0) * 2
        } else {
            let c = child[child.index(child.startIndex, offsetBy: 0)]
            startIndex = Int((c.asciiValue! - 65) * 2)
        }
        return [
            Plant(rawValue: garden[0][garden[0].index(garden[0].startIndex, offsetBy: startIndex)])!,
            Plant(rawValue: garden[0][garden[0].index(garden[0].startIndex, offsetBy: startIndex + 1)])!,
            Plant(rawValue: garden[1][garden[1].index(garden[1].startIndex, offsetBy: startIndex)])!,
            Plant(rawValue: garden[1][garden[1].index(garden[1].startIndex, offsetBy: startIndex + 1)])!
        ]
    }
}
