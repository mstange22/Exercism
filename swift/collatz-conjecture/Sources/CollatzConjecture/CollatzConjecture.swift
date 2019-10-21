enum CollatzError: Error {
    case invalidInput(String)
}

func steps(_ input: Int) throws -> Int {
    if input < 1 {
        throw CollatzError.invalidInput("Input must be greater than 0.")
    }
    var count = 0
    var n = input
    while n > 1 {
        if (n % 2 == 0) {
            n /= 2
        } else {
            n = (3 * n) + 1
        }
        count += 1
    }
    return count
}
