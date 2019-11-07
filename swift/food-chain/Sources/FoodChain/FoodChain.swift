fileprivate let parts = [
    ["", ""],
    ["fly", ""],
    ["spider", "It wriggled and jiggled and tickled inside her."],
    ["bird", "How absurd to swallow a bird!"],
    ["cat", "Imagine that, to swallow a cat!"],
    ["dog", "What a hog, to swallow a dog!"],
    ["goat", "Just opened her throat and swallowed a goat!"],
    ["cow", "I don't know how she swallowed a cow!"],
    ["horse", "She's dead, of course!"],
]

struct FoodChain {
    static func verse(_ input: Int) -> String {
        var res = ""
        var n = input
        res += "I know an old lady who swallowed a \(parts[n][0]).\n"
        if input == 8 {
            return res + parts[input][1]
        }
        if input > 1 {
            res += "\(parts[n][1])\n"
        }
        
        while n > 1 {
            res += "She swallowed the \(parts[n][0]) to catch the \(parts[n - 1][0])"
            res += n == 3 ? " that wriggled and jiggled and tickled inside her.\n" : ".\n"
            n -= 1
        }
        return res + "I don't know why she swallowed the fly. Perhaps she'll die."
    }
    
    static func song() -> String {
        return (1...8).map({
            FoodChain.verse($0)
        }).joined(separator: "\n\n")
    }
}
