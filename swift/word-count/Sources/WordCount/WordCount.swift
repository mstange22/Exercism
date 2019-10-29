import Foundation

struct WordCount {
    let words: String
    init(words: String) {
        self.words = words.lowercased().replacingOccurrences(
            of: #"[^0-9a-z ]"#,
            with: "",
            options: .regularExpression
        )
    }
    
    func count() -> [String: Int] {
        var res = [String: Int]()
        
        for word in words.split(separator: " ") {
            if res.keys.contains(String(word)) {
                res[String(word)]! += 1
            } else {
                res[String(word)] = 1
            }
        }
        return res
    }
}
