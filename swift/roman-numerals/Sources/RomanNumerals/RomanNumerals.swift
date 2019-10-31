func RomanNumeral(_ year: Int) -> String {
    let romanMap = [
        (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
        (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
        (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
    ]
    
    var n = year
    return romanMap.reduce("") {(res, pair) -> String in
        var temp = res
        while n >= pair.0 {
            temp += pair.1
            n -= pair.0
        }
        return temp
    }
}
