class PalindromeProducts {
    struct Product {
        var factor = [Int]()
        var value = 0
    }
    var largest = Product()
    var smallest = Product()
    
    init(maxFactor: Int, minFactor: Int = 1) {
        for i in minFactor...maxFactor {
            for j in minFactor...maxFactor {
                if isPalindrome(i * j) {
                    if i * j > largest.value {
                        largest.value = i * j
                        largest.factor = [i, j]
                    }
                    if smallest.value == 0 || i * j < smallest.value {
                        smallest.value = i * j
                        smallest.factor = [i, j]
                    }
                }
            }
        }
    }
}

fileprivate func isPalindrome(_ n: Int) -> Bool {
    let arr = Array(String(n))
    var i = 0
    while i < arr.count / 2 {
        if arr[i] != arr[arr.count - 1 - i] {
            return false
        }
        i += 1
    }
    return true
}
