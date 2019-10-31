import Foundation

struct Luhn {
    let digits: String
    var isValid: Bool {
        if (digits.count == 1) {
            return false
        }
        var sum = 0
        for (i, d) in digits.reversed().enumerated() {
            if !d.isNumber {
                return false
            }
            let value = Int(String(d))!
            if (i % 2 != 0) {
                let double = value * 2
                sum += double > 9 ? double - 9 : double
            } else {
                sum += value
            }
        }
        return sum % 10 == 0
    }
    
    init(_ input: String) {
        digits = input.replacingOccurrences(
            of: #"[ ]"#,
            with: "",
            options: .regularExpression
        )
    }
}
