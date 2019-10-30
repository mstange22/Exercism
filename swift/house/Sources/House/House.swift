struct House {
    static var parts = [
        ["house that Jack built", ""],
        ["malt", "lay in"],
        ["rat", "ate"],
        ["cat", "killed"],
        ["dog", "worried"],
        ["cow with the crumpled horn", "tossed"],
        ["maiden all forlorn", "milked"],
        ["man all tattered and torn", "kissed"],
        ["priest all shaven and shorn", "married"],
        ["rooster that crowed in the morn", "woke"],
        ["farmer sowing his corn", "kept"],
        ["horse and the hound and the horn", "belonged to"]
    ]

    static func verse(_ n: Int) -> String {
        "This is the \(parts[n - 1][0])" +
            stride(from: n, through: 2, by: -1).map {
                "\nthat \(parts[$0 - 1][1]) the \(parts[$0 - 2][0])"
            }.joined() + "."
    }
    
    static func recite() -> String {
        return (1...House.parts.count).map({ House.verse($0) }).joined(separator: "\n\n")
    }
}
