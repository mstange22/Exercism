struct Triplet {
    let a: Int
    let b: Int
    let c: Int
    var sum: Int {
        return a + b + c
    }
    var product: Int {
        return a * b * c
    }
    var isPythagorean: Bool {
        return a * a + b * b == c * c
    }
    
    init(_ a: Int, _ b: Int, _ c: Int) {
        self.a = a
        self.b = b
        self.c = c
    }
    
    static func fromWhere(_ minFactor: Int = 1, maxFactor: Int, sum: Int? = nil) -> [Triplet] {
        var res = [Triplet]()
        for i in minFactor...maxFactor - 2 {
            for j in i + 1...maxFactor - 1 {
                for k in j + 1...maxFactor {
                    if i * i + j * j == k * k {
                        let triplet = Triplet(i, j, k)
                        if (sum == nil || triplet.sum == sum) {
                            res.append(triplet)
                        }
                    }
                }
            }
        }
        return res
    }
}
