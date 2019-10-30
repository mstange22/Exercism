struct NumberSeries {
    var digits = [Int]()

    enum NumberSeriesError: Error {
        case spanLongerThanStringLength, invalidCharacter, negativeSpan
    }
    
    init(_ s: String) throws {
        for c in s {
            guard(c.isNumber) else {
                throw NumberSeriesError.invalidCharacter
            }
            digits.append(Int(String(c))!)
        }
    }
    
    func largestProduct(_ length: Int) throws -> Int? {
        guard(length <= digits.count) else {
            throw NumberSeriesError.spanLongerThanStringLength
        }
        guard(length >= 0) else {
            throw NumberSeriesError.negativeSpan
        }
        if length == 0 {
            return 1
        }
        
        var largest = 1
        
        for i in 0...digits.count - length {
            let prod = digits[i...i + length - 1].reduce(1, *)
            if i == 0 || prod > largest {
                largest = prod
            }
        }
        return largest
    }
}
