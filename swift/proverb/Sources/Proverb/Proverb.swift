extension Array where Element == String {
    func recite() -> String {
        self.count == 0 ? "" : (0..<self.count - 1).map({
            "For want of a \(self[$0]) the \(self[$0 + 1]) was lost.\n"
        }).joined(separator: "") + "And all for the want of a \(self[0])."
    }
}
