import Foundation

struct IsbnVerifier {
    static func isValid(_ s: String) -> Bool {
        var sum = 0
        
        let stripped = s.uppercased().replacingOccurrences(
            of: #"[^0-9X]"#,
            with: "",
            options: .regularExpression
        )
        
        if stripped.count != 10 {
            return false
        }
        
        for (i, digit) in stripped.enumerated() {
            if digit == "X" {
                if (i != 9) {
                    return false
                }
                sum += 10
            } else {
                sum += Int(String(digit))! * (10 - i )
            }
        }
        
        return sum % 11 == 0
    }
}
