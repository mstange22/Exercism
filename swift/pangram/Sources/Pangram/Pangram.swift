struct Pangram {
    static func isPangram(_ s: String) -> Bool {
        return "abcdefghijklmopqrstuvwxyz".allSatisfy({ s.lowercased().contains($0) })
    }
}
