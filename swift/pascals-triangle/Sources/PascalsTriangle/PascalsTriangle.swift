struct PascalsTriangle {
    var rows = [[Int]]()
    
    init(_ n: Int) {
        for i in 0..<n {
            var row = [Int]()
            for j in 0...i {
                if j == 0 || j == i {
                    row.append(1)
                } else {
                    row.append(rows[i - 1][j - 1] + rows[i - 1][j])
                }
            }
            rows.append(row)
        }
    }
}
