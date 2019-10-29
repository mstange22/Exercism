struct TwelveDaysSong {
    static var songParts = [
        ["", ""],
        ["first", "a Partridge in a Pear Tree"],
        ["second", "two Turtle Doves, and "],
        ["third", "three French Hens, "],
        ["fourth", "four Calling Birds, "],
        ["fifth", "five Gold Rings, "],
        ["sixth", "six Geese-a-Laying, "],
        ["seventh", "seven Swans-a-Swimming, "],
        ["eighth", "eight Maids-a-Milking, "],
        ["ninth", "nine Ladies Dancing, "],
        ["tenth", "ten Lords-a-Leaping, "],
        ["eleventh", "eleven Pipers Piping, "],
        ["twelfth", "twelve Drummers Drumming, "],
    ]
    
    static func verse(_ n: Int) -> String {
        return (0...n).map({
            $0 == 0 ? "On the \(songParts[n][0]) day of Christmas my true love gave to me: \(songParts[n][1])" :
            "\(songParts[n - $0][1])"
        }).joined(separator: "") + "."
    }
    
    static func verses(_ start: Int, _ end: Int) -> String {
        (start...end).map({ TwelveDaysSong.verse($0) }).joined(separator: "\n")
    }
    
    static func sing() -> String {
        return TwelveDaysSong.verses(1, 12)
    }
}
