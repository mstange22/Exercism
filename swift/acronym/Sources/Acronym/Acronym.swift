struct Acronym {
    static func abbreviate(_ s: String) -> String {
        var res = [String]()
        let arr = Array(s)
        for (i, c) in arr.enumerated() {
            if (i == 0) {
                res.append(String(c))
            } else if c.isLetter {
                if arr[i - 1] == " " || arr[i - 1] == "-" ||
                    (c.isUppercase && c.isUppercase && arr[i - 1].uppercased() != String(arr[i - 1])) {
                    res.append(String(c))
                }
            }
        }
        return res.joined().uppercased()
    }
}
