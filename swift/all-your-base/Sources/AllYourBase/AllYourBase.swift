import Foundation

enum BaseError: Error {
    case negativeDigit, invalidPositiveDigit, invalidInputBase, invalidOutputBase
}

struct Base {
    static func outputDigits(inputBase: Int, inputDigits: [Int], outputBase: Int) throws -> [Int] {
        if inputBase <= 1 {
            throw BaseError.invalidInputBase
        }
        if outputBase <= 1 {
            throw BaseError.invalidOutputBase
        }
        
        var res = [Int]()
        var base10 = 0
        
        // convert to base 10
        for (i, digit) in inputDigits.reversed().enumerated() {
            if digit < 0 {
                throw BaseError.negativeDigit
            }
            if digit >= inputBase {
                throw BaseError.invalidPositiveDigit
            }
            base10 += digit * Int(pow(Double(inputBase), Double(i)))
        }

        while base10 > 0 {
            res.insert(base10 % outputBase, at: 0)
            base10 /= outputBase
        }
        return res
    }
}
