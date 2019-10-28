struct Diamond {
    static func makeDiamond(letter: String) -> [String] {
        var res = [String]()
        
        let diff = Int(letter.first!.asciiValue!) - Int(Character("A").asciiValue!)
        let length = (2 * diff) + 1
        
        // top half
        for i in (0...diff) {
            let letter = Character(UnicodeScalar(Int(Character("A").asciiValue!) + i)!)
            let outerSpaces = String(repeating: " ", count: diff - i)
            
            if letter == "A" {
                res.append("\(outerSpaces)\(letter)\(outerSpaces)")
            } else {
                let inner = length - (2 + (2 * (diff - i)))
                let innerSpaces = String(repeating: " ", count: inner)
                res.append("\(outerSpaces)\(letter)\(innerSpaces)\(letter)\(outerSpaces)")
            }
        }
        
        // exit early if only A
        if res.count == 1 {
            return res
        }
        
        // reflect bottom half
        return res + res.reversed()[1..<res.endIndex]
    }
}
