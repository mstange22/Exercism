func encode(_ s: String) -> String {
    let letters = Array("abcdefghijklmnopqrstuvwxyz")
    var res = ""
    var counter = 0
    for c in s.lowercased() {
        if c.isLetter || c.isNumber {
            if counter % 5 == 0 && counter != 0 {
                res += " "
            }
            res += c.isLetter ? String(letters[letters.count - 1 - letters.index(of: c)!]) : String(c)
            counter += 1
        }
    }
    return res
}
