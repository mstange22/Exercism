class Anagram {
    let word: String
    
    init(word: String) {
        self.word = word.lowercased()
    }
    
    func match(_ candidates: [String]) -> [String] {
        candidates.filter { isAnagram(candidate: $0.lowercased()) }
    }
    
    func isAnagram(candidate: String) -> Bool {
        candidate != word && candidate.sorted() == word.sorted()
    }
}
