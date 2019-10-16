fileprivate var givenMap = [
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
]

class Scrabble {
    var score = 0

    // derive one-to-one map from given map (run once for all instances)
    private static let derivedMap: [String: Int] = {
        return [String: Int](uniqueKeysWithValues: givenMap.flatMap({ points, letters in
            letters.map({ ($0, points) })
            })
        )
    }()

    init(_ s: String?) {
        self.score = Scrabble.score(s);
    }
    
    public static func score(_ s: String?) -> Int {
        var score = 0
        if let s = s {
            for c in s.uppercased() {
                if let points = derivedMap[String(c)] {
                    score += points
                }
            }
        }
        return score
    }
}
