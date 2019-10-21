enum CollatzError: Error {
    case invalidInput(String)
}

func steps(_ n: Int) throws -> Int {
    var n = n
    if n < 1 {
        throw CollatzError.invalidInput("Input must be greater than 0.")
    }
    var count = 0
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
