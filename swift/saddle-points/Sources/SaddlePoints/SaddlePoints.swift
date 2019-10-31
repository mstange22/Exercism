struct SaddlePointsMatrix {
    var rows = [[Int]]()
    var columns = [[Int]]()
    var saddlePoints: [[Int]] {
        var res = [[Int]]()
        for (i, row) in rows.enumerated() {
            for (j, e) in row.enumerated() {
                if e == rows[i].max() && e == columns[j].min() {
                    res.append([i, j])
                }
            }
        }
        return res
    }
    
    init(_ matrix: String) {
        for row in matrix.split(separator: "\n") {
            var newRow = [Int]()
            
            for (i, e) in row.split(separator: " ").map({ Int(String($0))! }).enumerated() {
                newRow.append(e)
                
                if columns.count < i + 1 {
                    columns.append([e])
                } else {
                    columns[i].append(e)
                }
            }
            rows.append(newRow)
        }
    }
}
