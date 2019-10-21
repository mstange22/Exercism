import Foundation

class PhoneNumber {
    var number = "0000000000"
    var areaCode: String { String(number.prefix(3)) }

    init(_ startingNumber: String) {
        let strippedNumber = startingNumber.replacingOccurrences(of: "[^0-9]", with: "", options: .regularExpression);
        if strippedNumber.count == 10 {
            self.number = strippedNumber
        } else if strippedNumber.count == 11 {
            if strippedNumber.hasPrefix("1") {
                self.number = String(strippedNumber.suffix(10))
            }
        }
    }
}

extension String {
    init(describing: PhoneNumber) {
        let number = describing.number
        let exchange = String(number[number.index(number.startIndex, offsetBy: 3)...number.index(number.startIndex, offsetBy: 5)])
        self = "(\(describing.areaCode)) \(exchange)-\(String(number.suffix(4)))"
    }
}
