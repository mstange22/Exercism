fileprivate let ones = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

fileprivate let teens = [
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
]

fileprivate let tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
]

fileprivate struct BigNumber {
    var value: Int
    var label: String

    init(_ value: Int, _ label: String) {
        self.value = value
        self.label = label
    }
}

fileprivate let bigNumbers: [BigNumber] = [
    BigNumber(1_000_000_000, "billion"), BigNumber(1_000_000, "million"),
    BigNumber(1000, "thousand"), BigNumber(100, "hundred"),
]

struct Say {
    static func say(_ input: Int) -> String? {
        guard(input >= 0 && input < 1_000_000_000_000) else {
            return nil
        }
        var n = input
        var res = ""
        for bigNumber in bigNumbers {
            if n >= bigNumber.value {
                res += Say.say(n / bigNumber.value)! + " \(bigNumber.label)"
                if (n % bigNumber.value == 0) {
                    return res
                }
                res += " "
                n %= bigNumber.value
            }
        }
        if n >= 20 {
            res += tens[n / 10]
            if (n % 10 == 0) {
                return res
            }
            res += "-"
            n %= 10
        }
        return n > 9 ? res + teens[n % 10] : res + ones[n]
    }
}
