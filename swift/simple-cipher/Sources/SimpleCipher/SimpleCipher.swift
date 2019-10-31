class Cipher {
    var key: String = ""
    
    init?(key: String) {
        guard key != "" && key.uppercased() != key && Int(key) == nil else {
            return nil
        }
        self.key = key
    }
    
    init() {
        let letters = "abcdefghijklmnopqrstuvwxyz"
        for _ in 0...100 {
            self.key += String(letters.randomElement()!)
        }
    }
    
    func encode(_ plaintext: String) -> String {
        plaintext.enumerated().map({ translate($1, $0) }).joined()
    }
    
    func decode(_ encodedText: String) -> String {
        encodedText.enumerated().map({ translate($1, $0, true) }).joined()
    }
    
    func translate(_ c: Character, _ keyIndex: Int, _ decoding: Bool = false) -> String {
        let keyChar = key[key.index(key.startIndex, offsetBy: keyIndex)]
        let shift = decoding ? 0 - Int(keyChar.asciiValue! - "a".first!.asciiValue!) :
            Int(keyChar.asciiValue! - "a".first!.asciiValue!)
        return translateLetter(c, shift)
    }
    
    func translateLetter(_ c: Character, _ key: Int) -> String {
        let letterPos = Int(c.uppercased().first!.asciiValue! - "A".first!.asciiValue!)
        let shift = (letterPos + key + 26) % 26 - letterPos
        return String(Character(UnicodeScalar(Int(c.asciiValue!) + shift)!))
    }
}
