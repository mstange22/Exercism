func rotate(_ s: String, ROT: Int) -> String {
    return s.map{ $0.isLetter ? translateLetter($0, ROT) : String($0) }.joined()
}

func translateLetter(_ c: Character, _ r: Int) -> String {
    let letterPos = Int(c.uppercased().first!.asciiValue!) - Int(Character("A").asciiValue!)
    let shift = (letterPos + r) % 26 - letterPos
    return String(Character(UnicodeScalar(Int(c.asciiValue!) + shift)!))
}
