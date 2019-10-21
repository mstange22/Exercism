import Foundation

class PhoneNumber {
    var number = "0000000000"
    var areaCode: String { String(number.prefix(3)) }
    var exchange : String { String(number[number.index(number.startIndex, offsetBy: 3)...number.index(number.startIndex, offsetBy: 5)]) }
    var suffix : String { String(number.suffix(4)) }

    init(_ startingNumber: String) {
        let strippedNumber = startingNumber.replacingOccurrences(of: "[^0-9]", with: "", options: .regularExpression);
        if strippedNumber.count == 10 {
            self.number = strippedNumber
        } else if strippedNumber.count == 11 {
            if strippedNumber.hasPrefix("1") {
                let index = strippedNumber.index(strippedNumber.startIndex, offsetBy: 1)
                self.number = String(strippedNumber[index...])
            }
        }
    }
}

extension PhoneNumber: CustomStringConvertible {
    var description: String {
        return "(\(areaCode)) \(exchange)-\(suffix)"
    }
}
