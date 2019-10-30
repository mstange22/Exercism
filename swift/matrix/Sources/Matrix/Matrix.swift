struct Matrix {
    var rows = [[Int]]()
    var columns = [[Int]]()
    
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
